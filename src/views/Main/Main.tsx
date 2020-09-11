import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import Machine from "~/sections/Machine";
import { ApplicationState } from "~/store/types/applicationState";
import ProjectInfo from "~/sections/ProjectInfo";
import { projects } from "~/mocks/projects";
import MainLayout from "~/layouts";

import "./Main.scss";

const Main: FunctionComponent<ProjectWindowState> = ({
  projectWindowState,
  activeProject,
}: ProjectWindowState) => {
  const className = "main";

  return (
    <div className={`${className}`}>
      <MainLayout>
        <Machine isActive={!projectWindowState} />
        <ProjectInfo isActive={projectWindowState} project={projects[activeProject]} />
      </MainLayout>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): ProjectWindowState => {
  return {
    projectWindowState: state.projectWindowState,
    activeProject: state.activeProject,
  };
};

interface ProjectWindowState {
  projectWindowState: boolean;
  activeProject: number;
}

export default connect(mapStateToProps)(Main);
