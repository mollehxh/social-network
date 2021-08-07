import React from 'react';
import { Formik } from 'formik';
import { Button } from 'shared/ui/Button';
import { Divider } from 'shared/ui/Divider';
import { Input } from 'shared/ui/Input';
import { signUp } from 'features/auth/model';
import { useDispatch } from 'react-redux';


export const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={values => {
        dispatch(signUp(values));
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className='form'>
          <h1 className='form__title'>Sign up</h1>
          <div className='form-group'>
            <Input
              fullWidth
              placeholder='First name'
              value={values.firstName}
              onChange={handleChange}
              name='firstName'
            />
            <Input
              fullWidth
              placeholder='Second name'
              value={values.secondName}
              onChange={handleChange}
              name='secondName'
            />
          </div>
          <Input
            fullWidth
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
            name='email'
          />
          <Input
            type='password'
            fullWidth
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
            name='password'
          />
          <Input
            type='password'
            fullWidth
            placeholder='Confirm password'
            value={values.confirmPassword}
            onChange={handleChange}
            name='confirmPassword'
          />
          <div className='form-group'>
            <Button color='primary'>Sign up</Button>
            <Button href='/login' color='white'>
              Sign in
            </Button>
          </div>
          <Divider />
          <div className='form__other-auth'>
            {/* <img src={GoogleIcon} alt='' />
            <img src={GitHubIcon} alt='' /> */}
          </div>
        </form>
      )}
    </Formik>
  );
};
