import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'features/routing';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
