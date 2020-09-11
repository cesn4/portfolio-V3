import { ApplicationState } from './types/applicationState';
import { Actions } from './types/actionTypes';

const initialState: ApplicationState = {
    aiCommand: "Good morning",
    aiState: true,
    projectWindowState: false,
    activeProject: 0,
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
        case 'SetActiveProject': {
            return {
                ...state,
                activeProject: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
