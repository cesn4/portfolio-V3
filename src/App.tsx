import React, { FunctionComponent } from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import Main from "./views/Main";
import Projects from "./views/Projects";

import "~/config/layout";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <HashRouter>
          <Route exact path="/" component={Main} />
          <Route path="/project/:slug" component={Projects}/>
        </HashRouter>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
