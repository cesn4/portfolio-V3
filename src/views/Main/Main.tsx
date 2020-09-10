import React, { FunctionComponent } from "react";
import { Container, Row, Col } from "react-grid-system";
import { connect } from "react-redux";

import Machine from "~/sections/Machine";
import { ApplicationState } from "~/store/types/applicationState";
// import ProjectWindow from "~/components/ProjectWindow";

import "./Main.scss";
import StatusBar from "~/components/StatusBar";
import CommandMenu from "~/components/CommandMenu";
import DocumentationMenu from "~/components/DocumentationMenu";
import ProjectMenu from "~/components/ProjectMenu";

const Main: FunctionComponent<ProjectWindowState> = ({
    projectWindowState,
  }: ProjectWindowState) => {
  const className = "main";

  return (
    <div className={`${className}`}>
        {/* {projectWindowState && <ProjectWindow />} */}
      <Container>
        <div className={`${className}__box`}>
          <CommandMenu />
          <DocumentationMenu />
          <ProjectMenu />
          <Row>
            <Col>
              <div className={`${className}__status`}>
                <StatusBar />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`${className}__machine`}>
                <Machine />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
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
