import React, { FunctionComponent, Fragment, useState } from "react";

import DocumentationMenuLauncher from "./DocumentationMenuLauncher";
import DocumentationMenuInterface from "./DocumentationMenuInterface";

const DocumentationMenu: FunctionComponent<DocumentationMenuProps> = ({
  isProjects = false,
}: DocumentationMenuProps) => {
  const [menuState, setMenuState] = useState(false);


  const menuOpenHandler: VoidFunction = () => {
    setMenuState(true);
  };

  const menuCloseHandler: VoidFunction = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <DocumentationMenuLauncher
        projectState={isProjects}
        openHandler={menuOpenHandler}
        menuState={menuState}
      />
      <DocumentationMenuInterface
        projectState={isProjects}
        menuState={menuState}
        closeHandler={menuCloseHandler}
      />
    </Fragment>
  );
};

interface DocumentationMenuProps {
  isProjects?: boolean | undefined;
}

export default DocumentationMenu;
