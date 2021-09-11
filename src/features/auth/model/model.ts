import { createEffect, forward } from 'effector';
import { sessionModel } from 'entities/session';
import { signIn, signOut, signUp } from 'shared/api/auth';

export const fxSignIn = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    const user = await signIn(email, password);
    return user;
  }
);

export const fxSignUp = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    const user = await signUp(email, password);
    return user;
  }
);

export const fxSignOut = createEffect(async () => {
  signOut();
  return null;
});

forward({
  from: [fxSignIn.doneData, fxSignUp.doneData, fxSignOut.doneData],
  to: sessionModel.setSession,
});
export const foo = null;
