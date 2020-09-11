import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./CommandMenuLauncher.scss";

const CommandMenuLauncher: FunctionComponent<CommandMenuLauncherProps> = ({
  openHandler,
  menuState,
}: CommandMenuLauncherProps) => {
  const className = "command-menu-launcher";
  return (
    <div
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
      onMouseEnter={openHandler}
      onClick={openHandler}
    >
      <span className={`${className}__text`}>Commands</span>
    </div>
  );
};

interface CommandMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
}

export default CommandMenuLauncher;
