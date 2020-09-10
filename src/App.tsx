import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from './views';


const App: FunctionComponent = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LogIn}/>
        </Switch>
      </BrowserRouter>
    );
};

export default App;
