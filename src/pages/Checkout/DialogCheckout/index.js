import React, { forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  dialog: {
    minWidth: "400px",
  },
  dialogTitle: {
    color: "#595959",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
});

export default function DialogCheckout(props) {
  const classes = useStyles();
  const { confirmDialog, setConfirmDialog } = props;

  const handleClose = () => {
    if (confirmDialog.onlyOne) {
      confirmDialog.onConfirm();
    } else if (confirmDialog.onNotConfirm) {
      confirmDialog.onNotConfirm();
    } else {
      setConfirmDialog({ ...confirmDialog, isOpen: false });
    }
  };

  return (
    <div>
      <Dialog
        open={confirmDialog.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description aadf"
        style={{ minWidth: "330px" }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          {confirmDialog.icon}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography className={classes.dialogTitle} variant="h4">
            {confirmDialog?.title}
          </Typography>
          <DialogContentText>{confirmDialog?.subTitle}</DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          {confirmDialog.onlyOne ? (
            ""
          ) : (
            <Button variant="contained" color="error" onClick={handleClose}>
              Hủy
            </Button>
          )}
          <Button variant="contained" onClick={() => confirmDialog.onConfirm()}>
            {confirmDialog.onlyOne ? "Ok" : "Đồng ý"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
