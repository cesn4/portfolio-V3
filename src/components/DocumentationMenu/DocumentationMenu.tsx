import React, { FunctionComponent, Fragment, useState } from "react";

import DocumentationMenuLauncher from "./DocumentationMenuLauncher";
import DocumentationMenuInterface from "./DocumentationMenuInterface";

const DocumentationMenu: FunctionComponent = () => {
  const [menuState, setMenuState] = useState(false);

  const projectState = true;

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <DocumentationMenuLauncher projectState={projectState} openHandler={menuOpenHandler} menuState={menuState}/>
      <DocumentationMenuInterface projectState={projectState} menuState={menuState} closeHandler={menuCloseHandler}/>
    </Fragment>
  );
};

export default DocumentationMenu;
