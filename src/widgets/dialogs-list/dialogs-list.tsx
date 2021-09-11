import { Button } from '@material-ui/core';

import { dialogModel } from 'entities/dialog';
import { sessionModel } from 'entities/session';
import { useEffect } from 'react';
import { onDialogMessagesChanged } from 'shared/api/api';

export const DialogsList = () => {
  const dialogs = dialogModel.useDialogs();
  const session = sessionModel.useSession();

  useEffect(() => {
    onDialogMessagesChanged(session!.uid, dialogModel.setDialogs);
  }, [session]);

  return dialogs.map((dialog: any) => (
    <>
      <Button color='primary' variant='contained'>
        {dialog.id}
      </Button>

      <br />
    </>
  ));
};
