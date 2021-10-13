import React from "react";
import { Route } from "react-router";

export default function HomeTeplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
}
