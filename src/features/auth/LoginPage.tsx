import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signInAction } from './model/actions';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { Divider } from 'components/UI/Divider';
import GoogleIcon from 'assets/images/Google.svg';
import GitHubIcon from 'assets/images/GitHub.svg';

export const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          dispatch(signInAction(values));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='form'>
            <h1 className='form__title'>Sign in</h1>

            <Input
              fullWidth
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Email'
            />
            <Input
              fullWidth
              name='password'
              value={values.password}
              placeholder='Password'
              onChange={handleChange}
              type='password'
            />

            <div className='form-group'>
              <Button color='primary'>Sign in</Button>
              <Button href='/register' color='white'>
                Sign up
              </Button>
            </div>
            <Divider />
            <div className='form__other-auth'>
              <img src={GoogleIcon} alt='' />
              <img src={GitHubIcon} alt='' />
            </div>
          </form>
        )}
      </Formik>
    </main>
  );
};
