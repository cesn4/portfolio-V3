import React, { FunctionComponent } from "react";
import { Container, Row, Col } from "react-grid-system";
import { connect } from "react-redux";

import Navigation from "~/sections/Navigation";
import Machine from "~/sections/Machine";
import { ApplicationState } from "~/store/types/applicationState";
import ProjectWindow from "~/components/ProjectWindow";

import "./Main.scss";

const Main: FunctionComponent<ProjectWindowState> = ({
    projectWindowState,
  }: ProjectWindowState) => {
  const className = "main";

  return (
    <div className={`${className}`}>
        {projectWindowState && <ProjectWindow />}
      <Container>
        <div className={`${className}__box`}>
          <Row>
            <Col>
              <div className={`${className}__navigation`}>
                <Navigation />
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
