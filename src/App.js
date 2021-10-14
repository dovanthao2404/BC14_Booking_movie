import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import PageNotFound from "./template/PageNotFound";
import { renderRouteAdmin, renderRouteHome } from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "pages/Auth";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {renderRouteHome()}
          {renderRouteAdmin()}
          <Route path="/auth" component={Auth} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
