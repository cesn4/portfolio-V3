import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import classNames from "classnames";

import AI, { AIProps } from "~/components/AI/AI";
import { ApplicationState } from "~/store/types/applicationState";

import "./Machine.scss";

const Machine: FunctionComponent<AIProps> = ({ command }: AIProps) => {
  const className = "machine";
  return (
    <div className={classNames(`${className}`)}>
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

export default connect(mapStateToProps)(Machine);
