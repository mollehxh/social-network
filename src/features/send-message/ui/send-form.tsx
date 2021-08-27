import { TextField, Button } from '@material-ui/core';

import { Formik } from 'formik';
import { fxSendMessage } from '..';

export const SendForm = () => {
  return (
    <Formik initialValues={{ content: '' }} onSubmit={fxSendMessage}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={values.content}
            name='content'
            label='Content'
          />
          <br />

          <Button type='submit' variant='outlined' color='primary'>
            Send
          </Button>
        </form>
      )}
    </Formik>
  );
};
