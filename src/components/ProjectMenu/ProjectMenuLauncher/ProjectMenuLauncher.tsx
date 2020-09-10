import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./ProjectMenuLauncher.scss";

const ProjectMenuLauncher: FunctionComponent<ProjectMenuLauncherProps> = ({
  openHandler,
  menuState,
}: ProjectMenuLauncherProps) => {
  const className = "project-menu-launcher";
  return (
    <div
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
      onMouseEnter={openHandler}
    >
      <span className={`${className}__text`}>
        Projects
      </span>
    </div>
  );
};

interface ProjectMenuLauncherProps {
  openHandler: VoidFunction;
  menuState: boolean;
}

export default ProjectMenuLauncher;
