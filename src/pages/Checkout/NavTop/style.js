import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  checkoutTop: {
    width: "75%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
  },
  brandCheckout: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    width: "50px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "18px",
  },
  imgBrand: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  processTop: {
    fontWeight: "bold",
    color: "#fb4226",
    textTransform: "uppercase",
  },
  account: {
    position: "absolute",
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "18px",
  },
  accountContent: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&:hover > div.btnLogoutCheckou": {
      display: "block",
    },
  },
  imgProfile: {
    width: "30px",
    height: "30px",
    display: "block",
    marginRight: "8px",
    borderRadius: "50%",
  },
  nameProfile: {
    fontSize: "14px",
  },
  btnLogout: {
    position: "absolute",
    right: "0px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    top: "130%",
    background: "#222",
    borderRadius: "5px",
    padding: "4px 10px",
    color: "white",
    fontSize: "14px",
    display: "none",
    "&:hover": {
      background: "#4a4a4a",
    },
  },
  "@media (max-width: 767.98px)": {
    checkoutTop: {
      width: "100%",
    },
    processTop: {
      fontSize: "14px",
    },
    nameProfile: {
      display: "none",
    },
    btnLogout: {
      top: "180%",
    },
  },
});
