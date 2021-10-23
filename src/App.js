import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./template/PageNotFound";
import {
  renderRouteAdmin,
  renderRouteCheckout,
  renderRouteHome,
  renderRouteUser,
} from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "components/Loading";

function App() {
  return (
    <>
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        {renderRouteCheckout()}
        {renderRouteUser()}
        <Suspense fallback={<Loading />}>
          <Route
            exact={true}
            path="/auth"
            component={lazy(() => import("./pages/Auth"))}
          />
        </Suspense>
        <Route path="" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
