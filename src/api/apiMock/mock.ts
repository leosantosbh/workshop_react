import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';

/**
 * Create mocked Equipment list
 */
const Equipment = Array(10)
  .fill(0)
  .map((v, index) => ({
    UserCode: faker.random.number({
      min: 800000,
      max: 999999,
    }),
    Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    Email: faker.internet.email(),
    Active: faker.random.boolean(),
    Administrator: faker.random.boolean(),
  }));

/**
 * Mock equipmentApi endpoints
 */
export default (mock: MockAdapter) => {
  mock.onPost('/equipmentApi/get').reply(200, Equipment[0]);
  mock.onPost('/equipmentApi/search').reply(200, Equipment);
  mock.onPost('/equipmentApi/save').reply(200, {});
  mock.onPost('/equipmentApi/delete').reply(200, undefined);
};
