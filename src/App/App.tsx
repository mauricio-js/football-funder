import React from "react";
// import { Router } from './Router';
import { Landing, Home } from "Pages";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Landing />
      {/* <BrowserRouter>
        <Route>
          <Switch>
            <Route path={'/'} component={Landing} />
            <Route path={'/home'} component={Home} />
          </Switch>
        </Route>
      </BrowserRouter> */}
    </>
  );
}

export default App;
