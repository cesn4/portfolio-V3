import React, { Fragment, FunctionComponent } from "react";
import { Container, Row, Col, Hidden } from "react-grid-system";
import classNames from "classnames";

import { ProjectInfoObject } from "~/mocks/projects";

import "./ProjectInfo.scss";

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({
  project,
}: ProjectInfoProps) => {
  const className = "project-info";
  let linkState = true;

  if (!project.github && !project.link) {
    linkState = false;
  }

  return (
    <div className={classNames(`${className}`, {})}>
      <Container>
        <Row>
          <Hidden lg xl>
            <Col lg={12} xl={12}>
              <span className={`${className}__title-mobile`}>
                {project.title}
              </span>
            </Col>
          </Hidden>
        </Row>
        <Row>
          <Col lg={6} xl={6} md={6}>
            <div className={`${className}__image-box`}>
              <img
                onLoad={() => console.log("loading")}
                src={project.image}
                alt=""
                className={`${className}__main-image`}
              ></img>
              <div className={`${className}__secondary-image-box`}>
                {project.imageL && (
                  <img
                    className={`${className}__image`}
                    src={project.imageL}
                    alt=""
                  ></img>
                )}
                {project.imageR && (
                  <img
                    className={`${className}__image`}
                    src={project.imageR}
                    alt=""
                  ></img>
                )}
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} md={6}>
            <div className={`${className}__info-box`}>
              <span className={`${className}__title-desktop`}>
                {project.title}
              </span>
              <div className={`${className}__summary`}>
                <span className={`${className}__label`}>Summary</span>
                <span className={`${className}__text`}>{project.summary}</span>
              </div>
              <div className={`${className}__summary`}>
                <span className={`${className}__label`}>Tools</span>
                <span className={`${className}__text`}>{project.tools}</span>
              </div>
              <div className={`${className}__summary`}>
                {project.inprogress && (
                  <Fragment>
                    <span className={`${className}__label`}>Links</span>
                    <span className={`${className}__text`}>In Progress...</span>
                  </Fragment>
                )}
                {linkState && (
                  <span className={`${className}__label`}>
                    {project.github && project.link ? "Links" : "Link"}
                  </span>
                )}
                {project.link && (
                  <a className={`${className}__text`} href={project.link}>
                    {project.link}
                  </a>
                )}
                {project.github && (
                  <a className={`${className}__text`} href={project.github}>
                    {project.github}
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

interface ProjectInfoProps {
  project: ProjectInfoObject;
}

export default ProjectInfo;
