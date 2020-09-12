import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./DocumentationMenuLauncher.scss";

const DocumentationMenuLauncher: FunctionComponent<DocumentationMenuLauncherProps> = ({
  openHandler,
  menuState,
  main = false,
}: DocumentationMenuLauncherProps) => {
  const className = "documentation-menu-launcher";
  return (
    <div
      className={classNames(`${className}`, {
        "-active": menuState,
        "-main": main,
      })}
      onMouseEnter={openHandler}
      onClick={openHandler}
    >
      <span className={`${className}__text`}>Documentation</span>
    </div>
  );
};

interface DocumentationMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
  main?: boolean;
}

export default DocumentationMenuLauncher;
