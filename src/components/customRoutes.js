import React from 'react';
import { Route } from 'react-router-dom';
import ProgramUpload from '../customPages/ProgramUpload';
import Messages from '../customPages/Messages';


export default [
    <Route exact path="/program_upload" component={ProgramUpload} />,
    <Route exact path="/messages" component={Messages} />,
];