import React, { FunctionComponent, Fragment, useState } from "react";
import classNames from "classnames";

import DocumentationMenuLauncher from "./DocumentationMenuLauncher";
import DocumentationMenuInterface from "./DocumentationMenuInterface";

import './DocumentationMenu.scss';

const DocumentationMenu: FunctionComponent= () => {
  const [menuState, setMenuState] = useState(false);
  const className = "documentation-menu";

  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
        <div
          onClick={menuCloseHandler}
          className={classNames(`${className}__overlay`, {
            "-active": menuState,
          })}
        ></div>
      <DocumentationMenuLauncher
        openHandler={menuOpenHandler}
        menuState={menuState}
      />
      <DocumentationMenuInterface
        menuState={menuState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

export default DocumentationMenu;
