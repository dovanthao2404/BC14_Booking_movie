import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ConfirmDialog(props) {

  const { confirmDialog, setConfirmDialog } = props;

  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle>
        {/* <Typography variant="h6">
          {confirmDialog.title}
        </Typography> */}

      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          {confirmDialog.title}
        </Typography>
        <Typography variant="subtitle2">
          {setConfirmDialog.subTitle}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" >Hủy</Button>
        <Button variant="outlined" color="error">Đồng Ý</Button>
      </DialogActions>
    </Dialog>
  );
}
