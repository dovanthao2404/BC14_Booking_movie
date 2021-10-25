import Loading from "components/Loading";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { actGetCinemaSystemInformation } from "redux/actions/CinemaManagementActions";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function HomeTeplate({ Component, ...props }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCinemaSystemInformation());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = (e) => {
      setScreenWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <Navbar screenWidth={screenWidth} {...propsRoute} />
              <Component screenWidth={screenWidth} {...propsRoute} />
              <Footer screenWidth={screenWidth} />
            </>
          );
        }}
      />
    </Suspense>
  );
}
