import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE, CREATE, UPDATE, DELETE, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';
import { filter } from 'ramda';

const API_URL = 'https://api.festbot.com';

const isFile = field => field instanceof File;
const isNotFile = field => {
	return !isFile(field);
};

const getUUID = async function() {
	const { json } = await fetchUtils.fetchJson(`${API_URL}/_uuids`);
	return json.uuids[0];
};

const uploadToCDN = async function(file) {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('UPLOADCARE_PUB_KEY', 'f901eb6f977e50e57615');
	formData.append('UPLOADCARE_STORE', '1');
	const { data } = await axios.post('https://upload.uploadcare.com/base/?', formData, {
		header: {
			'Content-Type': 'multipart/form-data'
		}
	});

	return data.file;
};

const uploadFilesToCDN = async function(data) {
	const fileObjects = filter(isFile, data);
	const keys = Object.keys(fileObjects);
	const newData = {...data};

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		newData[key] = await uploadToCDN(fileObjects[key]);
	}

	return newData;
}

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = async (type, resource, params) => {
	switch (type) {
		case GET_LIST: {
			const { page, perPage } = params.pagination;
			const { field, order } = params.sort;
			const query = {
				skip: (page - 1) * perPage,
				limit: perPage,
				descending: order === 'DESC'
			};

			return {
				url: `${API_URL}/${resource}/_design/admin/_view/order-by-${field}?${stringify(query)}`
			};
		}
		case GET_ONE:
			return { url: `${API_URL}/${resource}/${params.id}` };
		case GET_MANY: {
			const query = {
				filter: JSON.stringify({ id: params.ids })
			};
			return { url: `${API_URL}/${resource}?${stringify(query)}` };
		}
		case GET_MANY_REFERENCE: {
			const { page, perPage } = params.pagination;
			const { field, order } = params.sort;
			const query = {
				sort: JSON.stringify([field, order]),
				range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
				filter: JSON.stringify({ ...params.filter, [params.target]: params.id })
			};
			return { url: `${API_URL}/${resource}?${stringify(query)}` };
		}
		case UPDATE:
			const filteredData = {
				...filter(isNotFile, params.data),
				id: undefined
			};

			return {
				url: `${API_URL}/${resource}/${filteredData._id}`,
				options: {
					method: 'PUT',
					body: JSON.stringify(filteredData)
				}
			};
		case CREATE:
			const uuid = await getUUID();
			return {
				url: `${API_URL}/${resource}/${uuid}`,
				options: { method: 'PUT', body: JSON.stringify(params.data) }
			};
		case DELETE:
			return {
				url: `${API_URL}/${resource}/${params.previousData._id}?rev=${params.previousData._rev}`,
				options: { method: 'DELETE' }
			};
		default:
			throw new Error(`Unsupported fetch action type ${type}`);
	}
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
	const { json } = response;
	switch (type) {
		case GET_LIST:
			return {
				data: json.rows.map(row => ({ ...row.value, id: row.id })),
				total: json.total_rows
			};
		case CREATE:
			return { data: { ...params.data, id: json.id } };
		default:
			return { data: json };
	}
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default async (type, resource, params) => {
	if (params.data) {
		params.data = await uploadFilesToCDN(params.data);
	}

	const { fetchJson } = fetchUtils;
	const { url, options } = await convertDataProviderRequestToHTTP(type, resource, params);

	return fetchJson(url, options).then(response =>
		convertHTTPResponseToDataProvider(response, type, resource, params)
	);
};
