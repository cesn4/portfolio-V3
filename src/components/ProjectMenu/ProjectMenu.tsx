import React, { FunctionComponent, Fragment, useState } from "react";

import ProjectMenuLauncher from "./ProjectMenuLauncher";
import ProjectMenuInterface from "./ProjectMenuInterface";

const ProjectMenu: FunctionComponent = () => {
  const [menuState, setMenuState] = useState(false);


  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
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
