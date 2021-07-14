import React from 'react';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';

const LoginPage = () => {
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        <h1 className='form__title'>Sign in</h1>

        <Input fullWidth placeholder='Email' />
        <Input fullWidth placeholder='Password' type='password' />

        <div className='form-group'>
          <Button color='primary'>Sign in</Button>
          <Button href='/register' color='white'>
            Sign up
          </Button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
