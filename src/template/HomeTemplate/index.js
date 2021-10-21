import Loading from "components/Loading";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { actGetCinemaSystemInformation } from "redux/actions/CinemaManagementActions";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HomeTeplate({ Component, ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCinemaSystemInformation());
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <Navbar />
              <Component {...propsRoute} />
              <Footer />
            </>
          );
        }}
      />
    </Suspense>
  );
}
