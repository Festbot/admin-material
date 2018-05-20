import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ArtistList = (props) => (
    <List title="All artists" {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="country" />
            <TextField source="website" />
            <TextField source="popularity" />
        </Datagrid>
    </List>
);