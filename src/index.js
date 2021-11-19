import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'react-perfect-scrollbar/dist/css/styles.css';
import '@digital/ui/assets/css/icon-font.css';
import '@digital/ui/assets/css/main.css';
import '../assets/css/salesPortal.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
