import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export default function Notification(props) {


  const { notify, setNotify } = props;


  const hanleClose = () => {
    setNotify({ ...notify, isOpen: false });
  };

  return (
    <Snackbar open={notify.isOpen}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={hanleClose}
    >
      <Alert variant="outlined" severity={notify.type}
        onClose={hanleClose}
        security={notify.type}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
