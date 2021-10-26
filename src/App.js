import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import {
  renderRouteAdmin,
  renderRouteTicketRoom,
  renderRouteHome,
  renderRouteUser,
} from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "pages/Auth";
import PageNotFound from "template/PageNotFound";

function App() {
  return (
    <>
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        {renderRouteTicketRoom()}
        {renderRouteUser()}
        <Route exact={true} path="/auth" component={Auth} />
        <Route exact={false} path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
