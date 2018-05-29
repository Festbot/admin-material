import React from 'react';
import { List, Datagrid, TextField, TextInput, Create, SimpleForm, Edit, EditButton } from 'react-admin';
import IdImageField from '../customFields/IdImageField';

const required = (message = 'Required') => value => (value ? undefined : message);

export const EventList = props => (
	<List title="All events" {...props}>
		<Datagrid>
			<IdImageField source="artist_id" baseUrl="https://chatbot.festbot.com/assets/img/artist/" />
			<TextField source="artist" />
			<TextField source="place" />
			<TextField source="startDate" />
			<TextField source="endDate" />
			<TextField source="festival" />
			<EditButton />
		</Datagrid>
	</List>
);

export const EventCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="artist" validate={required()} />
			<TextInput source="place" validate={required()} />
			<TextInput source="startDate" validate={required()} />
			<TextInput source="endDate" validate={required()} />
		</SimpleForm>
	</Create>
);

export const EventEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="artist" validate={required()} />
			<TextInput source="place" validate={required()} />
			<TextInput source="startDate" validate={required()} />
			<TextInput source="endDate" validate={required()} />
		</SimpleForm>
	</Edit>
);
