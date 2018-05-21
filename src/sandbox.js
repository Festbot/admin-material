import React from 'react';
import { List, Datagrid, TextField, EditButton, TextInput, Edit, SimpleForm, Create } from 'react-admin';

const required = (message = 'Required') => value => (value ? undefined : message);

export const SandboxList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source="name" />
			<EditButton />
		</Datagrid>
	</List>
);

export const SandboxCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
		</SimpleForm>
	</Create>
);

export const SandboxEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" validate={required()} />
		</SimpleForm>
	</Edit>
);
