import React from 'react';
import { List, Datagrid, TextField, TextInput, Create, SimpleForm, Edit, EditButton } from 'react-admin';

const required = (message = 'Required') => value => (value ? undefined : message);

export const ArtistList = props => (
	<List title="All artists" {...props}>
		<Datagrid>
			<TextField source="name" />
			<TextField source="country" />
			<TextField source="website" />
			<TextField source="popularity" />
			<EditButton />
		</Datagrid>
	</List>
);

export const ArtistCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
		</SimpleForm>
	</Create>
);

export const ArtistEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
		</SimpleForm>
	</Edit>
);
