const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles({
  seatSection: {
    padding: "30px 0",
    backgroundColor: "#fff",
    overflow: "auto",
    minWidth: "265px",
    height: "calc(100vh - 60px)",
    width: "75%",
  },
  seatSectionTop: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topLeft: {
    display: "flex",
    width: "85%",
    alignItems: "center",
  },
  topLeftImg: {
    borderRadius: "4px",
    display: "block",
    marginRight: "4px",
    width: "50px",
    height: "50px",
  },

  cinemaName: {
    fontSize: "17px",
    mb: 1,
  },
  cinemaAddress: {
    fontSize: "14px",
    color: "#9b9b9b",
  },
  topRight: {
    width: "15%",
    display: "flex",
    justifyContent: "flex-end",
  },
  topRightContent: {
    textAlign: "center",
    "& > p": {
      color: "#9b9b9b",
      fontSize: "12px",
    },
    "& span": {
      color: "#fb4226",
      fontSize: "30px",
    },
  },
  screen: {
    width: "90%",
    margin: "0 auto",
    marginTop: "20px",
    "& img": {
      width: "100%",
      display: "block",
    },
  },
  seatMap: { margin: "0 20px" },
  listSeat: {
    display: "grid",
    placeItems: "center",
  },
  seatRow: {
    display: "flex",
  },
  noteSeat: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  noteSeatItem: {
    display: "flex",
    marginRight: "20px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    "& > span": {
      cursor: "unset",
    },
  },
  seatNoteSub: {
    fontSize: "12px",
    color: "#9b9b9b",
    marginTop: "5px",
  },
  confirm: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    // borderTop: "1px solid #ccc",
    height: "80px",
    // zIndex: 1,
  },
  confirmWrapper: {
    display: "flex",
    height: "100%",
    width: "100%",
    borderTop: "1px solid #ccc",
  },
  btnSeat: {
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btnShowSeat: {
    background: "#fff",
    color: "#44c020",
  },
  btnGoNext: {
    background: "#44c020",
    color: "#fff",
    cursor: "pointer",
    userSelect: "none",
  },
  "@media (max-width: 767.98px)": {
    seatSection: {
      width: "100%",
      paddingBottom: "100px",
    },
    listSeat: {
      overflow: "auto",
    },
    topLeft: {
      fontSize: "14px",
      width: "75%",
    },
    noteSeat: {
      overflow: "auto",
      justifyContent: "normal",
    },
    noteSeatItem: {
      minWidth: "120px",
    },
  },
});
