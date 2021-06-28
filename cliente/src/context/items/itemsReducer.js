import {GET_ITEMS, GET_ITEM_ID, GET_CATEGORIES} from '../../types';

const itemsReducer = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                itemsResult: action.payload
            }

        case GET_ITEM_ID:
            return {
                ...state,
                itemByIdResult: action.payload
            }    

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }    

        default:
            return state;
    }
}

export default itemsReducer;
