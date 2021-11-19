/**
 * Add mocks for development environment.
 * Example:
 *    mock.onGet('/authorization').reply(200, payload);
 */

import MockAdapter from 'axios-mock-adapter';
import usersMock from '../../apiMock/users';

export default (mock: MockAdapter) => {
  usersMock(mock);
};
