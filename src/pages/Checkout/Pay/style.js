const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles({
  fontBold: { fontWeight: "bold" },
  w7: { width: "70%" },
  w6: { width: "60%" },
  w5: { width: "50%" },
  w4: { width: "40%" },
  w3: { width: "30%" },
  dFlex: { display: "flex" },
  textRight: { textAlign: "right" },
  colorGreen: {
    color: "#44c020",
  },
  pay: {
    background: "#fff",
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    zIndex: "98",
    padding: "0",
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    width: "25%",
  },
  payWrapper: {
    height: "100%",
    padding: "0 10px 100px",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  payItem: {
    padding: "20px 0",
    borderBottom: "1px dashed #ccc",
    minHeight: "40px",
  },
  totalMoney: {
    fontSize: "32px",
    textAlign: "center",
    height: "40px",
  },
  confirmItem: {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
  },
  btnConfirm: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "18px",
    background: "#44c020",
    display: "block",
    border: "none",
    width: "100%",
    height: "100%",
    padding: "20px 15px",
    userSelect: "none",
    cursor: "pointer",
  },

  "@media (max-width: 767.98px)": {
    pay: {
      width: "100%",
    },
    payWrapper: {
      paddingTop: "60px",
    },
  },
});
