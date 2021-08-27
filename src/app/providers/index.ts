import compose from 'compose-function';
<<<<<<< HEAD
import { withRouter } from './with-router';
import { withAuth } from './with-auth';

export const withProviders = compose(withRouter, withAuth);
=======
import { withStore } from './withStore';
import { withRouter } from './withRouter';
import { withAuth } from './withAuth';

export const withProviders = compose(withStore, withRouter, withAuth);
>>>>>>> 0e1a0bd8552999015a2b9249621ab5971fe552bb
