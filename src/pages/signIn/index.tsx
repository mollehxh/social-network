import React from 'react';
import { SignInForm } from 'features/auth/';
import { AuthLayout } from 'shared/ui/Layouts/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
