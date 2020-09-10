import React, { FunctionComponent, Fragment } from "react";
import classNames from "classnames";

import "./ProjectMenuInterface.scss";

const ProjectMenuInterface: FunctionComponent<ProjectMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: ProjectMenuInterfaceProps) => {
  const className = "project-menu-interface";

  const clickHandler = (command?: string) => {
    console.log('hello');
    closeHandler();
  }

  const projectContent = (
    <Fragment>
      <span className={`${className}__title`}>Code exapmles</span>
          <span
            onClick={() => clickHandler()}
            className={`${className}__name`}
          >
            Discovery App
          </span>
          <span
            onClick={() => clickHandler()}
            className={`${className}__name`}
          >
            Portfolio
          </span>
          <span className={`${className}__title`}>Projects</span>
          <span
            onClick={() => clickHandler()}
            className={`${className}__name`}
          >
            Hanetera Shop
          </span>
          <span
            onClick={() => clickHandler()}
            className={`${className}__name`}
          >
            Board score
          </span>
          <span className={`${className}__title`}>Contributions</span>
          <span
            onClick={() => clickHandler()}
            className={`${className}__name`}
          >
            Gray Boundaries
          </span>
    </Fragment>
  )

  return (
    <div
      onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
        "-project": true,
      })}
    >
      <div className={`${className}__content`}>
        {projectContent}
      </div>
    </div>
  );
};

interface ProjectMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default ProjectMenuInterface;
