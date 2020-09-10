import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import AI, { AIProps } from '~/components/AI/AI';
import { ApplicationState } from '~/store/types/applicationState';
import AiTerminal from '~/components/AiTerminal';

import './Machine.scss';

const Machine: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'machine';
    return (
        <div className={className}>
            <AI command={command} />
            <AiTerminal />
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): AIProps => {
    return {
        command: state.aiCommand,
    };
};

export default connect(mapStateToProps)(Machine);
