import { PrivateRoute } from '@digital/ui';
import React from 'react';
import { Switch } from 'react-router';
import WorkspaceRoutes from './WorkspaceRoutes';

export default () => {

  return (
    <Switch>
      <PrivateRoute path="/" component={WorkspaceRoutes} isAuthenticated={true} />
    </Switch>
  );
};
