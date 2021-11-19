/**
 * Use apiClient and create async functions to expose API server calls.
 * Refer to https://github.com/infinitered/apisauce for more information
 * Example:
 *    export const getEntity = () => apiClient.post<EntityType>('/endpoint', payload);
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, createApiMock, notification, storage } from '@digital/ui';
import { appConfig } from '../../helpers/appConfig';
import mockApi from './mock';

const { baseURL, enableMock } = appConfig;

const environment = process.env.NODE_ENV || '';

let mockConfig;

if (environment === 'development') {
  mockConfig = enableMock ? createApiMock(mockApi) : undefined;
}

/**
 * Mocked APIs are enabled only for development environment.
 */
export const apiClient = createApi({
  baseURL: `${baseURL}`,
  mockConfig,
  withCredentials: true
});

apiClient.addRequestTransform(request => {
  request.headers.Authorization = `Bearer ${storage.getApiToken()}`;
});

