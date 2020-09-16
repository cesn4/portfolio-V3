import React, { FunctionComponent, Fragment } from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";

import "./ProjectMenuInterface.scss";

const ProjectMenuInterface: FunctionComponent<ProjectMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: ProjectMenuInterfaceProps) => {
  const className = "project-menu-interface";

  const projectContent = (
    <Fragment>
      <span className={`${className}__title`}>Projects</span>
      <Link
        to="/project/0"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Discovery App
      </Link>
      <Link
        to="/project/1"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Portfolio
      </Link>
      <Link
        to="/project/2"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Hantera Shop
      </Link>
      <Link
        to="/project/5"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Hantera CMS
      </Link>
      <span className={`${className}__title`}>Collaborations</span>
      <Link
        to="/project/4"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Gray Boundaries
      </Link>
      <Link
        to="/project/3"
        onClick={() => closeHandler()}
        className={`${className}__name`}
      >
        Board Score
      </Link>
    </Fragment>
  );

  return (
    <div
      className={classNames(`${className}`, {
        "-active": menuState,
        "-project": true,
      })}
    >
      <div className={`${className}__overlay`}></div>
      <div className={`${className}__box`}>
        <div className={`${className}__content`}>{projectContent}</div>
      </div>
    </div>
  );
};

interface ProjectMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default ProjectMenuInterface;
