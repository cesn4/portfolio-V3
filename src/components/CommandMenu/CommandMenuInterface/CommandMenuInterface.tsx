import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./CommandMenuInterface.scss";

const CommandMenuInterface: FunctionComponent<CommandMenuInterfaceProps> = ({
  menuState,
  closeHandler
}: CommandMenuInterfaceProps) => {
  const className = "command-menu-interface";

  return (
    <div
    onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
    >
      qq
    </div>
  );
};

interface CommandMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default CommandMenuInterface;
