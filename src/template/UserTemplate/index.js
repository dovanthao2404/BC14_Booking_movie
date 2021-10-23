import Loading from "components/Loading";
import React, { Suspense } from "react";
import { Route } from "react-router";

export default function UserTemplate({ Component, ...props }) {
  return (
    <Suspense fallback={<Loading />}>
      <Route
        {...props}
        render={(propsRoute) => {
          return <Component {...propsRoute} />;
        }}
      />
    </Suspense>
  );
}
