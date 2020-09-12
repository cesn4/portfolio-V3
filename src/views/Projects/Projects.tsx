import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import MainLayout from "~/layouts";
import ProjectInfo from "~/sections/ProjectInfo";
import { projects } from "~/mocks/projects";

import "./Projects.scss";

const Projects: FunctionComponent = () => {
  const className = "projects";
  const { slug } = useParams();

  return (
    <div className={className}>
      <MainLayout>
        <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 0.1, duration: 0.4}}
        exit={{ opacity: 0 , y: 20}}
        >
          <ProjectInfo project={projects[slug]} />
        </motion.div>
      </MainLayout>
    </div>
  );
};

export default Projects;
