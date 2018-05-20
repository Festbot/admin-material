import React from 'react';
import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import dataProvider from './dataProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { ArtistList, ArtistCreate, ArtistEdit } from './artists';

//const dataProviderDummy = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="users" list={UserList} icon={PostIcon} />
		<Resource name="artists" list={ArtistList} create={ArtistCreate} edit={ArtistEdit} icon={PostIcon} />
	</Admin>
);

export default App;
