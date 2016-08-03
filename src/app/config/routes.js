import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../app';
import Home from '../components/homePage/homePage';
import Page from '../components/defaultPage/defaultPage';
import NotFound from '../components/notFoundPage/notFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="page" component={Page} />
    <Route path="*" component={NotFound} />
  </Route>
);
