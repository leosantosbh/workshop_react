import { AppContainer, Locales } from '@digital/ui';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../assets/images/logo_small.png';
import models from '../src/store/models';
import { enUS, ptBR } from './i18n';
import AppRoutes from './routes/AppRoutes';

const headerData = {
  logo: Logo,
  onLogout: () => {},
};

const translations = [
  { locale: 'en-US' as Locales, translations: enUS },
  { locale: 'pt-BR' as Locales, translations: ptBR },
];

const appConfig = {
  translations,
};

export default () => (
  <AppContainer models={models} header={headerData} appConfig={appConfig}>
    <Router>
      <AppRoutes />
    </Router>
  </AppContainer>
);
