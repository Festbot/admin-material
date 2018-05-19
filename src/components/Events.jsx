import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';

export const EventList = (props) => (
    <List title="All events" {...props}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="facebook" />
 
        </Datagrid>
    </List>
);