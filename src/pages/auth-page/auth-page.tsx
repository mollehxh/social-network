import { AuthForm } from 'features/auth';
import { fetchMessages } from 'shared/api/api';

export const AuthPage = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};
