import { Box } from "@mui/system";
import React, { Suspense, useRef, useState } from "react";
import { Route, Redirect } from "react-router";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loading from "components/Loading";
import Sidebar from "./Sidebar";
import NavTop from "./NavTop";

export default function AdminTemplate({ Component, ...props }) {
  const { userLogin } = useSelector((state) => state.userManagementReducer);

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        if (userLogin) {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#f0f2f5",
                }}
              >
                <Sidebar />

                <Box sx={{ width: "calc(100% - 300px)" }}>
                  <NavTop userLogin={userLogin} />
                  <Box
                    sx={{
                      margin: "40px 40px 0",
                      minHeight: "500px",
                      background: "#fff",
                    }}
                  >
                    <Box sx={{ padding: "24px" }}>
                      <Suspense fallback={<Loading />}>
                        <Component {...propsRoute} />
                      </Suspense>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        }

        return <Redirect to="/auth" />;
      }}
    />
  );
}
