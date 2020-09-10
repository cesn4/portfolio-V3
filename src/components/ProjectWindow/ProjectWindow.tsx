import React, { FunctionComponent, useState } from "react";

import Icon from "../Icons";
import ProjectInfo from "../ProjectInfo";
import {
  ProjectInfoObject,
  boardScore,
  discoveryApp,
  portfolio,
  hantera,
  grayBoundaries,
} from "~/mocks/projects";
import { SetProjectWindow } from "~/store/actions";

import "./ProjectWindow.scss";

const ProjectWindow: FunctionComponent = () => {
  const className = "project-window";

  const [activeProject, setActiveProject] = useState(discoveryApp);

  const project: ProjectInfoObject = activeProject;

  return (
    <div className={className}>
      <div className={`${className}__label-box`}>
        <span className={`${className}__label`}>PROJECTS</span>
        <div
          className={`${className}__button`}
          onClick={() => SetProjectWindow(false)}
        >
          <Icon name={"close"} size={32} color="#000000" />
        </div>
      </div>
      <div className={`${className}__content`}>
        <div className={`${className}__projects`}>
          <ProjectInfo project={project} />
        </div>
        <div className={`${className}__list`}>
          <span className={`${className}__title`}>Code exapmles</span>
          <span
            onClick={() => setActiveProject(discoveryApp)}
            className={`${className}__name`}
          >
            Discovery App
          </span>
          <span
            onClick={() => setActiveProject(portfolio)}
            className={`${className}__name`}
          >
            Portfolio
          </span>
          <span className={`${className}__title`}>Projects</span>
          <span
            onClick={() => setActiveProject(hantera)}
            className={`${className}__name`}
          >
            Hanetera Shop
          </span>
          <span
            onClick={() => setActiveProject(boardScore)}
            className={`${className}__name`}
          >
            Board score
          </span>
          <span className={`${className}__title`}>Contributions</span>
          <span
            onClick={() => setActiveProject(grayBoundaries)}
            className={`${className}__name`}
          >
            Gray Boundaries
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectWindow;
