import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { UserList, UserEdit, UserCreate } from './components/users';
import { FestivalList, FestivalEdit, FestivalCreate } from './components/festivals';
import { ArtistList, ArtistCreate, ArtistEdit } from './components/artists';
import { EventList, EventCreate, EventEdit } from './components/Events';
import { VenueList, VenueCreate, VenueEdit } from './components/venues';
import { SandboxList, SandboxCreate, SandboxEdit } from './components/sandbox';
import Menu from './components/menu'
import customRoutes from './components/customRoutes';

const App = () => (
	<Admin customRoutes={customRoutes} menu={Menu} dataProvider={dataProvider} title="Festbot Admin">
		<Resource options={{ label: 'Users' }} name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
		<Resource options={{ label: 'Festivals' }} name="festivals" list={FestivalList} edit={FestivalEdit} create={FestivalCreate} />
		<Resource options={{ label: 'Events' }} name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={PostIcon} />
		<Resource options={{ label: 'Artists' }} name="artists" list={ArtistList} create={ArtistCreate} edit={ArtistEdit} icon={PostIcon} />
		<Resource options={{ label: 'Venues' }} name="venues" list={VenueList} create={VenueCreate} edit={VenueEdit} icon={PostIcon} />
    <Resource options={{ label: 'Sandbox' }} name="sandbox" list={SandboxList} create={SandboxCreate} edit={SandboxEdit} icon={PostIcon} />
    
	</Admin>
);

export default App;
