/**
 * Empty application store example.
 * Refer to https://easy-peasy.now.sh/ for more information
 */
import { Action, action } from 'easy-peasy';

export interface AppModel {
  userName: string | null;
  onUserName: Action<AppModel, string>;
}

const app: AppModel = {
  userName: null,
  onUserName: action((state, payload) => {
    state.userName = payload;
  }),
};

export default app;
