import React, { FunctionComponent, Fragment, useState } from "react";

import CommandMenuLauncher from "./CommandMenuLauncher";
import CommandMenuInterface from "./CommandMenuInterface";

const CommandMenu: FunctionComponent = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
    console.log("Open");
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
    console.log("close");
  };

  return (
    <Fragment>
      <CommandMenuLauncher openHandler={menuOpenHandler} />
      <CommandMenuInterface menuState={menuState} closeHandler={menuCloseHandler}/>
    </Fragment>
  );
};

export default CommandMenu;
