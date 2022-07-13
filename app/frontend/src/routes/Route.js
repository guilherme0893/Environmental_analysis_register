import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
