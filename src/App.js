import React from 'react';
import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import dataProvider from './dataProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { ArtistList, ArtistCreate, ArtistEdit } from './artists';
import { SandboxList, SandboxCreate, SandboxEdit } from './sandbox';

//const dataProviderDummy = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PostIcon} />
		<Resource name="artists" list={ArtistList} create={ArtistCreate} edit={ArtistEdit} icon={PostIcon} />
		<Resource name="sandbox" list={SandboxList} create={SandboxCreate} edit={SandboxEdit} icon={PostIcon} />
	</Admin>
);

export default App;
