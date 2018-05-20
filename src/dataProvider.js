import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE, CREATE, UPDATE, DELETE, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const API_URL = 'https://api.festbot.com';

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
			const query = {
				skip: (page - 1) * perPage,
				limit: perPage
			};
			return {
				url: `${API_URL}/${resource}/_design/default/_view/admin?${stringify(query)}`
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
			return {
				url: `${API_URL}/${resource}/${params.id}`,
				options: {
					method: 'PUT',
					body: JSON.stringify({ ...params.data, id: undefined })
				}
			};
		case CREATE:
			const { json } = await fetchUtils.fetchJson(`${API_URL}/_uuids`);
			return {
				url: `${API_URL}/${resource}/${json.uuids[0]}`,
				options: { method: 'PUT', body: JSON.stringify(params.data) }
			};
		case DELETE:
			return {
				url: `${API_URL}/${resource}/${params._id}?rev=${params._rev}`,
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
	const { fetchJson } = fetchUtils;
	const { url, options } = await convertDataProviderRequestToHTTP(type, resource, params);
	return fetchJson(url, options).then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
