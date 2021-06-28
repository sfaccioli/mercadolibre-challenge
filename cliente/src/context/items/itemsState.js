import React, { useReducer } from 'react';
import itemsContext from './itemsContext';
import itemsReducer from './itemsReducer';

import {GET_ITEMS, GET_ITEM_ID, GET_CATEGORIES} from '../../types';

import clienteAxios from '../../config/axios';

const ItemsState = props => {

    const initialState = {
        itemsResult: {},
        itemByIdResult: null,
        categories: []
    }

    const [state, dispatch] = useReducer(itemsReducer, initialState);

    const searchItems = async (searchInput) => {
        try {
            const result = await clienteAxios.get('/items', { params: { q: searchInput }});

            console.log(result.data);
            dispatch({
                type:GET_ITEMS,
                payload:result.data
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    const getItemById = async (id) => {
        try {
            const item = await clienteAxios.get(`/items/${id}`);

           const categories = await clienteAxios.get(`/items/categories/${item.data.item.category}`);

            console.log(item.data);
            dispatch({
                type:GET_ITEM_ID,
                payload:item.data
            });

            console.log(categories.data);
            dispatch({
                type:GET_CATEGORIES,
                payload:categories.data
            });

        } catch (error) {
            console.log(error);
        }
    }


    return ( 
        <itemsContext.Provider
            value={{
                itemsResult: state.itemsResult,
                itemByIdResult: state.itemByIdResult,
                categories: state.categories,
                searchItems,
                getItemById,
            }}
        >
            {props.children}
        </itemsContext.Provider>
     );
}
 
export default ItemsState;