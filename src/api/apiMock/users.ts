import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';
import { ShowUsersProps } from '../user';

/**
 * Create mocked User list
 */
const Users: ShowUsersProps[] = Array(20)
  .fill(0)
  .map((v, index) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return {
      UserCode: `${firstName.toLowerCase()}_${faker.random.number({ min: 1000, max: 9999 })}`,
      Name: `${firstName} ${lastName}`,
      Email: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), 'arcelormittal.com.br'),
      Active: faker.random.boolean(),
      Permission: [faker.random.number({ min: 1, max: 4 })]
    }});

/**
 * Mock usersApi endpoints
 */
export default (mock: MockAdapter) => {
  mock.onGet('/list/users').reply(200, Users);
  mock.onPost('/list/users').reply(200, {});
  mock.onDelete('/list/users/1').reply(200, {});
};

