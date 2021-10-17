import Loading from "components/Loading";
import React, { Suspense } from "react";
import { Route } from "react-router";
import Navbar from "./Navbar";

export default function HomeTeplate({ Component, ...props }) {
  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return (
            <>
              <Navbar />
              <Component {...propsRoute} />
            </>
          );
        }}
      />
    </Suspense>
  );
}
