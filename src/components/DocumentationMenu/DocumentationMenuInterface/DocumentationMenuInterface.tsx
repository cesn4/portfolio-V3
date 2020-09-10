import React, { FunctionComponent, Fragment } from "react";
import classNames from "classnames";

import { documentation } from "~/mocks/documentation";

import "./DocumentationMenuInterface.scss";

const DocumentationMenuInterface: FunctionComponent<DocumentationMenuInterfaceProps> = ({
  menuState,
  closeHandler,
  projectState,
}: DocumentationMenuInterfaceProps) => {
  const className = "documentation-menu-interface";

  const documentationContent = (
    <Fragment>
      <span className={`${className}__text`}>{documentation.text}</span>
      <span className={`${className}__command`}>{documentation.command}</span>
      <span className={`${className}__text`}>{documentation.secndaryText}</span>
    </Fragment>
  );

  const projectContent = (
    <Fragment>
      <span className={`${className}__title`}>Code exapmles</span>
          <span
            onClick={() => console.log('hey')}
            className={`${className}__name`}
          >
            Discovery App
          </span>
          <span
            onClick={() => console.log('hey')}
            className={`${className}__name`}
          >
            Portfolio
          </span>
          <span className={`${className}__title`}>Projects</span>
          <span
            onClick={() => console.log('hey')}
            className={`${className}__name`}
          >
            Hanetera Shop
          </span>
          <span
            onClick={() => console.log('hey')}
            className={`${className}__name`}
          >
            Board score
          </span>
          <span className={`${className}__title`}>Contributions</span>
          <span
            onClick={() => console.log('hey')}
            className={`${className}__name`}
          >
            Gray Boundaries
          </span>
    </Fragment>
  )

  return (
    <div
      onMouseLeave={closeHandler}
      className={classNames(`${className}`, {
        "-active": menuState,
        "-project": projectState,
      })}
    >
      <div className={`${className}__content`}>
        {projectState? projectContent : documentationContent}
      </div>
    </div>
  );
};

interface DocumentationMenuInterfaceProps {
  menuState: boolean;
  closeHandler: VoidFunction;
  projectState: boolean;
}

export default DocumentationMenuInterface;
