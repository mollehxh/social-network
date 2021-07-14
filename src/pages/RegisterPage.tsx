import React from 'react';
import GoogleIcon from 'assets/images/Google.svg';
import GitHubIcon from 'assets/images/GitHub.svg';
import { Button } from 'components/UI/Button';
import { Divider } from 'components/UI/Divider';
import { Input } from 'components/UI/Input';

const RegisterPage = () => {
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        <h1 className='form__title'>Sign up</h1>
        <div className='form-group'>
          <Input fullWidth placeholder='First name' />
          <Input fullWidth placeholder='Second name' />
        </div>
        <Input fullWidth placeholder='Email' />
        <Input type='password' fullWidth placeholder='Password' />
        <Input type='password' fullWidth placeholder='Confirm password' />
        <div className='form-group'>
          <Button color='primary'>Sign up</Button>
          <Button href='/login' color='white'>
            Sign in
          </Button>
        </div>
        <Divider />
        <div className='form__other-auth'>
          <img src={GoogleIcon} alt='' />
          <img src={GitHubIcon} alt='' />
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
