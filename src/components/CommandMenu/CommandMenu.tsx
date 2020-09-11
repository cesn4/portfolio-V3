import React, { FunctionComponent, Fragment, useState } from "react";

import CommandMenuLauncher from "./CommandMenuLauncher";
import CommandMenuInterface from "./CommandMenuInterface";

import './CommandMenu.scss';

const CommandMenu: FunctionComponent = () => {
  const [menuState, setMenuState] = useState(false);
  const className = "project-menu";

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      {menuState && (
        <div
          onClick={menuCloseHandler}
          className={`${className}__overlay`}
        ></div>
      )}
      <CommandMenuLauncher openHandler={menuOpenHandler} menuState={menuState}/>
      <CommandMenuInterface menuState={menuState} closeHandler={menuCloseHandler}/>
    </Fragment>
  );
};

export default CommandMenu;
