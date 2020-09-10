import { AiCommandTypes } from './commandTypes';

export interface SetAiCommand {
    type: 'SetAiCommand';
    payload: AiCommandTypes;
}

export interface SetAiType {
    type: 'SetAiState';
    payload: boolean;
}
export interface SetProjectWindow {
    type: 'SetProjectWindow';
    payload: boolean;
}

export type Actions = SetAiCommand | SetAiType | SetProjectWindow;
