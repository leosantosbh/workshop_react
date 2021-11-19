/* eslint-disable no-nested-ternary */
import config from '../config.json';

const environment = process.env.NODE_ENV || '';

export const appConfig =
  environment.trim() === 'development'
    ? config.development
    : environment.trim() === 'staging'
    ? config.staging
    : config.production;
