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
	EditButton,
	FormDataConsumer,
	LongTextInput
} from 'react-admin';
import TagList from '../customFields/TagList.jsx';
import IdImageField from '../customFields/IdImageField';
import FestbotImageInput from '../customFields/ImageUpload';
import Slug from '../customFields/Slug'
import HasPhotoField from '../customFields/HasPhotoField'


const required = (message = 'Required') => value => (value ? undefined : message);

export const ArtistList = props => (
	<List title="All artists" {...props}>
		<Datagrid>
			<IdImageField source="artistPhoto" style={{width: '100px'}} baseUrl="https://ucarecdn.com/" />
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

export const ArtistCreate = props => {
	console.log("render")
	return (
	<Create {...props}>
	<SimpleForm>
		<FestbotImageInput source="artistPhoto" />
		<HasPhotoField source="artistPhoto" destination="hasPhoto" />
		<TextInput source="name" validate={required()} />
		<Slug source="name" destination="slug"/>
		<TextInput source="country" />
		<TextInput source="website" />
		<TextInput source="facebook" />
		<TextInput source="spotify" />
		<LongTextInput
		source="genres"
		parse={v => v.split(',')}
		label="Genres (Pop,Rock,Indie,Electonica)"
		defaultValue={["uncategorised"]}
		
	/>
		<BooleanInput source="featured" />
	</SimpleForm>
</Create>
)
}



export const ArtistEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			
			<FestbotImageInput source="artistPhoto" />
			<HasPhotoField source="artistPhoto" destination="hasPhoto" />
			<TextInput source="name" validate={required()} />
			<Slug source="name" destination="slug"/>
			<TextInput source="country" />
			<TextInput source="website" />
			<TextInput source="facebook" />
			<TextInput source="spotify" />
			<LongTextInput
			source="genres"
			format={(v=[]) => v.join(',')}
			parse={v => v.split(',')}
			label="Genres (Pop,Rock,Indie,Electonica)"
		/>
			<BooleanInput source="featured" />
		</SimpleForm>
	</Edit>
);
