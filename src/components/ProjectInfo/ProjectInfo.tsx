import React, { FunctionComponent } from "react";

import "./ProjectInfo.scss";
import { ProjectInfoObject } from "~/mocks/projects";

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({project}: ProjectInfoProps) => {
  const className = "project-info";
  return (
    <div className={className}>
      <span className={`${className}__title`}>{project.title}</span>
      <div className={`${className}__content`}>
        <div className={`${className}__image-box`}>
          <img
            src={project.image}
            alt=""
            className={`${className}__main-image`}
          ></img>
          <div className={`${className}__secondary-image-box`}>
            <img
              className={`${className}__image`}
              src={project.imageL}
              alt=""
            ></img>
            <img
              className={`${className}__image`}
              src={project.imageR}
              alt=""
            ></img>
          </div>
        </div>
        <div className={`${className}__info-box`}>
          <div className={`${className}__summary`}>
            <span className={`${className}__label`}>Summary</span>
            <span className={`${className}__text`}>
              {project.summary}
            </span>
          </div>
          <div className={`${className}__summary`}>
            <span className={`${className}__label`}>Tools</span>
            <span className={`${className}__text`}>
            {project.tools}
            </span>
          </div>
          <div className={`${className}__summary`}>
            <span className={`${className}__label`}>Link</span>
            <a
              className={`${className}__text`}
              href={project.link}
            >
              {project.link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectInfoProps {
  project: ProjectInfoObject;
}

export default ProjectInfo;
