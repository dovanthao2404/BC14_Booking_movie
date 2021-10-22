import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./template/PageNotFound";
import { renderRouteAdmin, renderRouteHome, renderRouteUser } from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "pages/Auth";

function App() {
  return (
    <>
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        {renderRouteUser()}
        <Route exact={true} path="/auth" component={Auth} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
