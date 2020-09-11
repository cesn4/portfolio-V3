import React, { FunctionComponent, Fragment, useState } from "react";

import ProjectMenuLauncher from "./ProjectMenuLauncher";
import ProjectMenuInterface from "./ProjectMenuInterface";

import "./ProjectMenu.scss";

const ProjectMenu: FunctionComponent = () => {
  const [menuState, setMenuState] = useState(false);

  const className = "project-menu";

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      {menuState && (
        <div
          onClick={menuCloseHandler}
          className={`${className}__overlay`}
        ></div>
      )}
      <ProjectMenuLauncher
        openHandler={menuOpenHandler}
        menuState={menuState}
      />
      <ProjectMenuInterface
        menuState={menuState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

export default ProjectMenu;
