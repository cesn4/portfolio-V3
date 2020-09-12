import React, { FunctionComponent, Fragment } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import ProjectMenuInterface from "./ProjectMenuInterface";
import { ApplicationState } from "~/store/types/applicationState";
import { SetProjectWindow } from "~/store/actions";

import "./ProjectMenu.scss";

const ProjectMenu: FunctionComponent = () => {
  const windowState = useSelector(
    (state: ApplicationState) => state.projectWindowState
  );

  const className = "project-menu";

  const menuCloseHandler: VoidFunction = () => {
    SetProjectWindow(false);
  };

  return (
    <Fragment>
      <div
        onClick={() => SetProjectWindow(false)}
        className={classNames(`${className}__overlay`, {
          "-active": windowState,
        })}
      ></div>
      <ProjectMenuInterface
        menuState={windowState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

export default ProjectMenu;
