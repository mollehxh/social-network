import { Button, Typography } from '@material-ui/core';
import { useStore } from 'effector-react';
import { $messages, fxFetchMessages } from 'entities/dialog/model';
import { fxSignOut } from 'features/auth/model';
import { SendForm } from 'features/send-message/ui';
import { useEffect } from 'react';
import { firestore } from 'shared/config/firebase-config';

export const DialogsPage = () => {
  const messages = useStore($messages);

  useEffect(() => {
    firestore.collection('messages').onSnapshot(() => fxFetchMessages());
  }, []);

  return (
    <div>
      <Button onClick={() => fxSignOut()}>Sign Out</Button>
      {messages.map((item: any) => (
        <div>{item.content}</div>
      ))}
      <SendForm />
    </div>
  );
};
