<<<<<<< HEAD
import { withProviders } from './providers';
import { Routing } from 'pages';

const App = () => <Routing />;
=======
import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'features/routing';

const App = () => {
  return <Routing />;
};
>>>>>>> 0e1a0bd8552999015a2b9249621ab5971fe552bb

export default withProviders(App);
