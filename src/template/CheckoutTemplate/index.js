import Loading from "components/Loading";
import React, { Suspense, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router";
import { useSelector } from "react-redux";
export default function CheckoutTemplate({ Component, ...props }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setScreenWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { userLogin } = useSelector((state) => state.userManagementReducer);

  if (!userLogin) {
    return <Redirect to="/" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return <Component screenWidth={screenWidth} {...propsRoute} />;
        }}
      />
    </Suspense>
  );
}
