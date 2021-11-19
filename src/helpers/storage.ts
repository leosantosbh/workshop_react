/**
 * Define your app storage keys here and extends digital-ui default storage.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { getItem, removeItem, storage } from '@digital/ui';
import { appConfig } from './appConfig';

const appStorageKeys = {
  loginToken: 'loginToken',
  center: 'center',
};

const appStorage = {
  ...storage,
  getLoginToken: () => getItem(appStorageKeys.loginToken),
  removeLoginToken: () => removeItem(appStorageKeys.loginToken),
};

if (appConfig.enableMock) {
  appStorage.setLoggedUser('User Name');
  appStorage.setApiToken('mockApiToken');
}

export default appStorage;
