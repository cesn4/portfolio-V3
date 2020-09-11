import React, { FunctionComponent, Fragment } from "react";

import ProjectMenuInterface from "./ProjectMenuInterface";

import "./ProjectMenu.scss";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types/applicationState";
import { SetProjectWindow } from "~/store/actions";

const ProjectMenu: FunctionComponent = () => {

  const windowState = useSelector((state: ApplicationState) => state.projectWindowState);

  const className = "project-menu";


  const menuCloseHandler: VoidFunction = () => {
    SetProjectWindow(false);
  };

  return (
    <Fragment>
      {windowState && (
        <div
          onClick={() => SetProjectWindow(false)}
          className={`${className}__overlay`}
        ></div>
      )}
      {/* <ProjectMenuLauncher
        openHandler={menuOpenHandler}
        menuState={menuState}
      /> */}
      <ProjectMenuInterface
        menuState={windowState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

export default ProjectMenu;
