import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import { useTheme } from "@mui/material/styles";

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const theme = useTheme();
  const useStyles = makeStyles({
    dialog: {
      position: "absolute",
      padding: theme.spacing(2),
      top: theme.spacing(10),
    },
  });

  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          Hủy
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => confirmDialog.onConfirm()}
        >
          Đồng Ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}
