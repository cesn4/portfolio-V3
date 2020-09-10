import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { documentation } from '~/mocks/documentation';

import "./DocumentationMenuInterface.scss";

const DocumentationMenuInterface: FunctionComponent<DocumentationMenuInterfaceProps> = ({
  menuState,
  closeHandler,
}: DocumentationMenuInterfaceProps) => {
  const className = "documentation-menu-interface";

  return (
    <div
      onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
      })}
    >
      <div className={`${className}__content`}>
    <span className={`${className}__text`}>{documentation.text}</span>
    <span className={`${className}__command`}>{documentation.command}</span>
    <span className={`${className}__text`}>{documentation.secndaryText}</span>
      </div>
    </div>
  );
};

interface DocumentationMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
}

export default DocumentationMenuInterface;
