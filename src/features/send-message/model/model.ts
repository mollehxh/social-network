import { createEffect } from 'effector';
import { dialogModel } from 'entities/dialog';
import { sendMessage } from 'shared/api/api';

export const fxSendMessage = createEffect(async (data: any) => {
  await sendMessage(data);
  dialogModel.addMessage(data);
});
