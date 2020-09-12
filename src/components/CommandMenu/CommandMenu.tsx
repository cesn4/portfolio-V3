import React, { FunctionComponent, Fragment, useState } from "react";
import classNames from "classnames";

import CommandMenuLauncher from "./CommandMenuLauncher";
import CommandMenuInterface from "./CommandMenuInterface";

import "./CommandMenu.scss";

const CommandMenu: FunctionComponent<CommandMenuProps> = ({
  main = false,
}: CommandMenuProps) => {
  const [menuState, setMenuState] = useState(false);
  const className = "command-menu";

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <div
        onClick={menuCloseHandler}
        className={classNames(`${className}__overlay`, {
          "-active": menuState,
        })}
      ></div>
      <CommandMenuLauncher
        main={main}
        openHandler={menuOpenHandler}
        menuState={menuState}
      />
      <CommandMenuInterface
        menuState={menuState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

interface CommandMenuProps {
  main?: boolean;
}

export default CommandMenu;
