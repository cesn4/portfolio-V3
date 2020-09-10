import React, { FunctionComponent } from "react";

import "./CommandMenuLauncher.scss";

const CommandMenuLauncher: FunctionComponent<CommandMenuLauncherProps> = ({
  openHandler,
}: CommandMenuLauncherProps) => {
  const className = "command-menu-launcher";
  return (
    <div className={className} onMouseEnter={openHandler}>
        <span className={`${className}__text`}>Commands</span>
    </div>
  );
};

interface CommandMenuLauncherProps {
  openHandler: VoidFunction;
}

export default CommandMenuLauncher;
