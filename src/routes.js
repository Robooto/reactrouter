//Mapping for routes

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

// Mapping "/" to the app component
export default (
    <Route path="/" component={App} />
);