/**
 * Empty application store example.
 * Refer to https://easy-peasy.now.sh/ for more information
 */
import { Action, action } from 'easy-peasy';

export interface AppModel {
  refreshLogin: boolean;
  changePassword: boolean;
  onRefreshLogin: Action<AppModel, boolean>;
  onChangePassword: Action<AppModel, boolean>;
  establishmentId: number;
  onEstablishmentId: Action<AppModel, number>;
  userCode: string | null;
  onUserCode: Action<AppModel, string>;
  representativeId: number | null;
  onRepresentativeId: Action<AppModel, number>;
}

const app: AppModel = {
  refreshLogin: false,
  changePassword: false,
  onRefreshLogin: action((state, payload) => {
    state.refreshLogin = payload;
  }),
  onChangePassword: action((state, payload) => {
    state.changePassword = payload;
  }),
  establishmentId: 0,
  onEstablishmentId: action((state, payload) => {
    state.establishmentId = payload;
  }),
  userCode: null,
  onUserCode: action((state, payload) => {
    state.userCode = payload;
  }),
  representativeId: null,
  onRepresentativeId: action((state, payload) => {
    state.representativeId = payload;
  }),
};

export default app;
