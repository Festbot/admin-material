import React from 'react';
import { List, Datagrid, TextField, EditButton, TextInput, Edit, SimpleForm, Create } from 'react-admin';

const required = (message = 'Required') => value => (value ? undefined : message);

export const UserList = props => (
	<List title="All users" {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="name" />
			<EditButton />
		</Datagrid>
	</List>
);

export const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
		</SimpleForm>
	</Create>
);

export const UserEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
		</SimpleForm>
	</Edit>
);
