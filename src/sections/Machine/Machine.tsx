import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import classNames from "classnames";

import AI, { AIProps } from "~/components/AI/AI";
import { ApplicationState } from "~/store/types/applicationState";

import "./Machine.scss";

const Machine: FunctionComponent<AIProps & MachineProps> = ({ command, isActive }: AIProps & MachineProps) => {
  const className = "machine";
  return (
    <div className={classNames(`${className}`, {
      "-active": isActive,
    })}>
      <Container>
        <Row>
          <Col>
            <AI command={command} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState): AIProps => {
  return {
    command: state.aiCommand,
  };
};

interface MachineProps {
  isActive: boolean;
}

export default connect(mapStateToProps)(Machine);
