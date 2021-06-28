import React, { useReducer } from 'react';
import searchContext from './searchContext';
import searchReducer from './searchReducer';
import { INPUT_SEARCH } from '../../types';

const SearchState = props => {
    const initialState = {
        searchInput : ''
    }


    const [state, dispatch] = useReducer(searchReducer, initialState);

    const changeSearchInput = searchText => {
        dispatch({
            type: INPUT_SEARCH,
            payload: searchText
        })
    }

    return (
        <searchContext.Provider
            value={{
                searchInput: state.searchInput,
                changeSearchInput
            }}
        >
            {props.children}
        </searchContext.Provider>
    )
}

export default SearchState;