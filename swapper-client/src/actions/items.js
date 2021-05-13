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



export const fetchWhItemsSuccess = ( items ) => {
    return {
        type: actionTypes.FETCH_WHITEMS_SUCCESS,
        items: items
    };
};

export const fetchWhItemsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_WHITEMS_FAIL,
        error: error
    };
};

export const fetchWhItemsStart = () => {
    return {
        type: actionTypes.FETCH_WHITEMS_START
    };
};

export const fetchWhItems = () => {
    return dispatch => {
        dispatch(fetchWhItemsStart());
        ItemService.getWhItems().then(
            response => {
                console.log(response.data)
                dispatch(fetchWhItemsSuccess(response.data));
            },
            error => {
                dispatch(fetchWhItemsFail(error));
            }
          );
    };
};


/********** TAKE item from warehouse and RETURN item to warehouse */

export const takeWhItemsSuccess = ( items ) => {
    return {
        type: actionTypes.TAKE_WHITEM_SUCCESS,
        items: items
    };
};

export const takeWhItemsFail = ( error ) => {
    return {
        type: actionTypes.TAKE_WHITEM_FAIL,
        error: error
    };
};


export const takeWhItems = (id, item) => {
    return dispatch => {
        ItemService.takeWhItem(id, item).then(
            response => {
                dispatch(takeWhItemsSuccess(response.data));
            },
            error => {
                dispatch(takeWhItemsFail(error));
            }
          );
    };
};


/* RETURN part */
export const returnWhItemsSuccess = ( items ) => {
    return {
        type: actionTypes.RETURN_WHITEM_SUCCESS,
        items: items
    };
};

export const returnWhItemsFail = ( error ) => {
    return {
        type: actionTypes.RETURN_WHITEM_FAIL,
        error: error
    };
};


export const returnWhItems = (userId) => {
    return dispatch => {
        ItemService.sendWhItem(userId).then(
            response => {
                dispatch(returnWhItemsSuccess(response.data));
            },
            error => {
                dispatch(returnWhItemsFail(error));
            }
          );
    };
};


