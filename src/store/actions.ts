import { store } from '~/store';

import { AiCommandTypes } from './types/commandTypes';

export const SetAiCommand = (payload: AiCommandTypes): void => {
    store.dispatch({ type: 'SetAiCommand', payload: payload });
};

export const SetAiState = (payload: boolean): void => {
    store.dispatch({ type: 'SetAiState', payload: payload });
};

export const SetProjectWindow = (payload: boolean): void => {
    store.dispatch({ type: 'SetProjectWindow', payload: payload });
};
export const SetAnimationState = (payload: boolean): void => {
    store.dispatch({ type: 'SetAnimationState', payload: payload });
};
