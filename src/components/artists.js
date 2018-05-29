import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	BooleanField,
	BooleanInput,
	TextInput,
	Create,
	SimpleForm,
	Edit,
	EditButton
} from 'react-admin';
import TagList from '../customFields/TagList.jsx';
import IdImageField from '../customFields/IdImageField';
import ImageUpload from '../customFields/ImageUpload';
import { Field } from 'redux-form';

const required = (message = 'Required') => value => (value ? undefined : message);

export const ArtistList = props => (
	<List title="All artists" {...props}>
		<Datagrid>
			<IdImageField source="_id" baseUrl="https://chatbot.festbot.com/assets/img/artist/" />
			<TextField source="name" />
			<TextField source="country" />
			<TextField source="website" />
			<TextField source="popularity" />

			<TagList source="genres" />
			<BooleanField source="featured" />

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
			<IdImageField source="_id" width="250px" baseUrl="https://chatbot.festbot.com/assets/img/artist/" />

			<Field name="imageData" source="imageData" component={ImageUpload} />
			<TextInput source="name" validate={required()} />
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<TextInput source="facebook" />
			<BooleanInput source="featured" />
		</SimpleForm>
	</Edit>
);
