import React, { FunctionComponent, Fragment, useState } from "react";

import DocumentationMenuLauncher from "./DocumentationMenuLauncher";
import DocumentationMenuInterface from "./DocumentationMenuInterface";

const DocumentationMenu: FunctionComponent = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <DocumentationMenuLauncher openHandler={menuOpenHandler} menuState={menuState}/>
      <DocumentationMenuInterface menuState={menuState} closeHandler={menuCloseHandler}/>
    </Fragment>
  );
};

export default DocumentationMenu;
