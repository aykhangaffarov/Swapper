import ItemService from '../services/item-service';
import * as actionTypes from './types';


export const fetchMyItemsSuccess = ( myitems ) => {
    return {
        type: actionTypes.FETCH_MYITEMS_SUCCESS,
        myitems: myitems
    };
};

export const fetchMyItemsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_MYITEMS_FAIL,
        error: error
    };
};

export const fetchMyItemsStart = () => {
    return {
        type: actionTypes.FETCH_MYITEMS_START
    };
};

export const fetchMyItems = () => {
    return dispatch => {
        dispatch(fetchMyItemsStart());
        const user = JSON.parse(localStorage.getItem("user"));
        console.log('USERID'+user.id);
        ItemService.getMyItems(user.id).then(
            response => {
                console.log('response from myitems fetch _  ' + response.data);
                dispatch(fetchMyItemsSuccess(response.data));
            },
            error => {
                dispatch(fetchMyItemsFail(error));
            }
          );
    };
};