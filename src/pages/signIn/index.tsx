import React from 'react';
import { SignInForm } from 'features/auth/SignInForm';
import { AuthLayout } from 'shared/ui/Layouts/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
