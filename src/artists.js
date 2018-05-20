import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	TextInput,
	Create,
	SimpleForm
} from 'react-admin';

export const ArtistList = props => (
	<List title="All artists" {...props}>
		<Datagrid>
			<TextField source="name" />
			<TextField source="country" />
			<TextField source="website" />
			<TextField source="popularity" />
		</Datagrid>
	</List>
);

export const ArtistCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
		</SimpleForm>
	</Create>
);
