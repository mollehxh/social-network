import { AppLayout } from 'widgets/app-layout';
import { DialogsList } from 'widgets/dialogs-list';

export const DialogsPage = () => {
  return (
    <AppLayout title='Dialogs'>
      <DialogsList />
    </AppLayout>
  );
};
