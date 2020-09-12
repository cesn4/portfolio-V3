import React, { FunctionComponent } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import Main from "./views/Main";
import Projects from "./views/Projects";

import "~/config/layout";

const App: FunctionComponent = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route path="/project/:slug" component={Projects} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
