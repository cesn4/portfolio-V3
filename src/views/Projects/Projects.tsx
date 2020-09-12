import React, { FunctionComponent } from "react";

import MainLayout from "~/layouts";
import ProjectInfo from "~/sections/ProjectInfo";
import { projects } from "~/mocks/projects";
import { useParams } from "react-router-dom";

import "./Projects.scss";
import { motion } from "framer-motion";

const Projects: FunctionComponent = () => {
  const className = "projects";
  const { slug } = useParams();

  return (
    <div className={className}>
      <MainLayout>
        <motion.div
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 1.5, duration: 1.5}}
        exit={{ opacity: 0 , y: 100}}
        >
          <ProjectInfo project={projects[slug]} />
        </motion.div>
      </MainLayout>
    </div>
  );
};

export default Projects;
