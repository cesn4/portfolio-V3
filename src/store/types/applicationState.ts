import { AiCommandTypes } from './commandTypes';

export interface ApplicationState {
    aiCommand: AiCommandTypes;
    aiState: boolean;
    projectWindowState: boolean;
    animationState: boolean;
}
