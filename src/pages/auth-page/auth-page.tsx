import { AuthForm, RegisterForm } from 'features/auth';

export const AuthPage = () => {
  return (
    <div>
      <AuthForm />
      <hr />
      <RegisterForm />
    </div>
  );
};
