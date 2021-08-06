import React from 'react';
import { AuthLayout } from 'shared/ui/Layouts/AuthLayout';
import { SignUpForm } from 'features/auth';

const SignUp = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
