import * as React from "react";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { styled } from "@mui/material/styles";

export default function ModalYoutube(props) {
  const { url, isOpenModal, setIsOpenModal } = props;

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      overflowY: "unset",
    },
  }));

  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <div>
      <BootstrapDialog
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        id={"hihi"}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              zIndex: 99999,
            }}
          >
            <HighlightOffIcon
              onClick={handleClose}
              style={{ fontSize: "40px", color: "#fff", cursor: "pointer" }}
            />
          </div>
          <iframe
            style={{ display: "block" }}
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </BootstrapDialog>
    </div>
  );
}
