import { ApplicationState } from './types/applicationState';
import { Actions } from './types/actionTypes';

const initialState: ApplicationState = {
    aiCommand: '',
    aiState: true,
    projectWindowState: false,
};
const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetAiCommand': {
            return {
                ...state,
                aiCommand: action.payload,
            };
        }
        case 'SetAiState': {
            return {
                ...state,
                aiState: action.payload,
            };
        }
        case 'SetProjectWindow': {
            return {
                ...state,
                projectWindowState: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
