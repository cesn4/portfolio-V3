import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import Machine from "~/sections/Machine";
import { ApplicationState } from "~/store/types/applicationState";
import ProjectInfo from "~/sections/ProjectInfo";
import { boardScore } from "~/mocks/projects";
import MainLayout from "~/layouts";

import "./Main.scss";


const Main: FunctionComponent<ProjectWindowState> = ({
  projectWindowState,
}: ProjectWindowState) => {
  const className = "main";

  return (
    <div className={`${className}`}>
      <MainLayout>
        {/* <Machine /> */}
        <ProjectInfo project={boardScore} />
      </MainLayout>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): ProjectWindowState => {
  return {
    projectWindowState: state.projectWindowState,
  };
};

interface ProjectWindowState {
  projectWindowState: boolean;
}

export default connect(mapStateToProps)(Main);
