import { CssBaseline } from '@material-ui/core';
import { withProviders } from './providers';
import { Routing } from 'pages';

const App = () => (
  <>
    <CssBaseline />
    <Routing />
  </>
);

export default withProviders(App);
