import React from 'react';
import Routes from './Routes';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

const ProvidersNavigation = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default ProvidersNavigation;
