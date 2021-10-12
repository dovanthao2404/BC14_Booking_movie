import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import PageNotFound from "./containers/PageNotFound";
import { renderRouteHome } from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {renderRouteHome()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
