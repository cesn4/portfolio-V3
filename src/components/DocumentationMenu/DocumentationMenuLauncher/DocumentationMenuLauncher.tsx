import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./DocumentationMenuLauncher.scss";

const DocumentationMenuLauncher: FunctionComponent<DocumentationMenuLauncherProps> = ({
  openHandler,
  menuState,
  projectState,
}: DocumentationMenuLauncherProps) => {
  const className = "documentation-menu-launcher";
  return (
    <div
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
      onMouseEnter={openHandler}
    >
      <span className={`${className}__text`}>
        {projectState ? 'Projects' : 'Documentation'}
      </span>
    </div>
  );
};

interface DocumentationMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
  projectState: boolean;
}

export default DocumentationMenuLauncher;
