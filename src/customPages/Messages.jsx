import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle } from 'react-admin';

const Messages = () => (
    <Card>
        <ViewTitle title="Messages" />
        <CardContent>
            ...
        </CardContent>
    </Card>
);

export default Messages;