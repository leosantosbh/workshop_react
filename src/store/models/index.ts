import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from '@digital/ui';
import app, { AppModel } from './app';

/**
 * Connect your application store to digital-ui global store
 * passing them as prop for AppContainer component.
 */
export interface AppStoreModel {
  app: AppModel;
}

const models: AppStoreModel = {
  app,
};

const { useActions, useStore } = createTypedHooks<AppStoreModel & StoreModel>();

export { useActions, useStore };

export default models;
