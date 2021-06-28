import { INPUT_SEARCH } from '../../types';

const searchReducer = (state, action) => {
    switch(action.type) {
        case INPUT_SEARCH:
            return {
                ...state,
                searchInput: action.payload
            }

        default:
            return state
    }
}

export default searchReducer;