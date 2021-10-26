import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Loading from "components/Loading";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router";
import { TICKET_ROOM_ID } from "utils/settings/config";
import "./index.css";

const useStyles = makeStyles({
  form: {
    maxWidth: "360px",
    padding: "40px 32px 30px",
    position: "absolute",

    backgroundImage:
      "linear-gradient(to bottom,rgba(20, 50, 93, 0.9),rgba(8, 22, 48, 0.9))",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
    textAlign: "center",
    color: "#fff",
    borderRadius: "6px",
  },
  "@media (max-width: 767.98)": {
    form: {
      padding: "40px 32px 30px",
      position: "relative",
      top: "unset",
      left: "unset",
      transform: "unset",
    },
  },
});

export default function UserTemplate({ Component, ...props }) {
  const { userLogin } = useSelector((state) => state.userManagementReducer);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (userLogin && !localStorage.getItem(TICKET_ROOM_ID)) {
      history.push("/");
    }
  }, [history, userLogin]);

  useEffect(() => {
    return () => {
      localStorage.removeItem(TICKET_ROOM_ID);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  background: "url(/assets/img/bg2.jpg)",
                }}
              >
                <div
                  id="form-login"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className={classes.form}>
                    <Component {...propsRoute} />
                  </Box>
                </div>
              </div>
            </>
          );
        }}
      />
    </Suspense>
  );
}
