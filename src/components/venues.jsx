import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	TextInput,
	Create,
	SimpleForm,
	Edit,
	EditButton,
	ArrayInput,
	SimpleFormIterator
} from 'react-admin';
import TagList from '../customFields/TagList';

const required = (message = 'Required') => value => (value ? undefined : message);

const tagFormatter = v => {
	if (!v) return;
	return v.join(' ');
};

export const VenueList = props => (
	<List title="All Venues" {...props}>
		<Datagrid>
			<TextField source="_id" />
			<TextField source="name" />
			<TextField source="category" />
			<TextField source="latitude" />
			<TextField source="longitude" />
			<TagList source="attributes" />

			<EditButton />
		</Datagrid>
	</List>
);

export const VenueCreate = props => (
	<Create {...props}>
		<SimpleForm submitOnEnter={false}>
			<TextInput source="name" validate={required()} />
			<TextInput source="category" validate={required()} />
			<TextInput source="latitude" validate={required()} />
			<TextInput source="longitude" validate={required()} />
			<TextInput source="attributes" label="Tags (food mexican burito vine)" validate={required()} />
		</SimpleForm>
	</Create>
);

export const VenueEdit = props => (
	<Edit {...props}>
		<SimpleForm submitOnEnter={false}>
			<TextInput source="name" validate={required()} />
			<TextInput source="category" validate={required()} />
			<TextInput source="latitude" validate={required()} />
			<TextInput source="longitude" validate={required()} />
			<TextInput
				source="attributes"
				format={tagFormatter}
				parse={v => v.split(' ')}
				label="Tags (food mexican burito vine)"
				validate={required()}
			/>
		</SimpleForm>
	</Edit>
);
