import React, { FunctionComponent, Fragment, useState } from "react";

import CommandMenuLauncher from "./CommandMenuLauncher";
import CommandMenuInterface from "./CommandMenuInterface";

const CommandMenu: FunctionComponent = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <CommandMenuLauncher openHandler={menuOpenHandler} menuState={menuState}/>
      <CommandMenuInterface menuState={menuState} closeHandler={menuCloseHandler}/>
    </Fragment>
  );
};

export default CommandMenu;
