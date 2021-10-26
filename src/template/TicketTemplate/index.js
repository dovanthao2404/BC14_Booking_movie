import Loading from "components/Loading";
import React, { Suspense, useEffect, useState } from "react";

import { Route } from "react-router";

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
