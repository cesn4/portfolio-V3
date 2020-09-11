import React, { FunctionComponent } from "react";

import MainLayout from "~/layouts";
import ProjectInfo from "~/sections/ProjectInfo";
import { projects } from "~/mocks/projects";
import { useParams } from "react-router-dom";

import "./Projects.scss";

const Projects: FunctionComponent = () => {
  const className = "projects";
  const { slug } = useParams();

  return (
    <div className={className}>
      <MainLayout>
        <ProjectInfo project={projects[slug]} />
      </MainLayout>
    </div>
  );
};

export default Projects;
