import { Formik } from 'formik';
import { Typography, TextField, Button } from '@material-ui/core';
import { fxSignIn } from '../model';

export const AuthForm = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={fxSignIn}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Typography>Sign in</Typography>
          <TextField
            onChange={handleChange}
            value={values.email}
            name='email'
            label='Email'
          />
          <br />
          <TextField
            onChange={handleChange}
            value={values.password}
            name='password'
            label='Password'
          />
          <br />
          <Button type='submit' variant='outlined' color='primary'>
            Sign in
          </Button>
        </form>
      )}
    </Formik>
  );
};
