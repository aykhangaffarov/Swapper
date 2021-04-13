import ItemService from '../services/item-service';
import * as actionTypes from './types';

export const fetchItemsSuccess = ( items ) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items: items
    };
};

export const fetchItemsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,
        error: error
    };
};

export const fetchItemsStart = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START
    };
};

export const fetchItems = () => {
    return dispatch => {
        dispatch(fetchItemsStart());
        ItemService.getItems().then(
            response => {
                console.log(response.data)
                dispatch(fetchItemsSuccess(response.data));
            },
            error => {
                dispatch(fetchItemsFail(error));
            }
          );
    };
};