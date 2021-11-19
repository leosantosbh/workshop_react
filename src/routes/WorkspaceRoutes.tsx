import { addMenuTopAreaItem, Workspace } from '@digital/ui';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import menuData from '../menu.json';
import { useStore } from '../store/models';

const FormView = lazy(() => import('../views/FormView'));
const UserView = lazy(() => import('../views/UserView'))

// ** Add the new Views of the project in this route file, and in the file "menu.json" ** //

export default () => {
  const { username } = useStore(store => store.permission);

  return (
    <Workspace menu={addMenuTopAreaItem(menuData, { label: username || '', icon: 'profile-gender_neutral_user' })}>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/formulario" component={FormView} />
          <Route path="/usuario" component={UserView} />
        </Switch>
      </Suspense>
    </Workspace>
  );
};
