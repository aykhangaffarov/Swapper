import * as actionTypes from './types';
import SwapService from '../services/swaprequest-service';
export const sendSwapSuccess = ( swapData ) => {
    return {
        type: actionTypes.SEND_SWAP_SUCCESS,
        swapData: swapData
    };
};

export const sendSwapFail = ( error ) => {
    return {
        type: actionTypes.SEND_SWAP_FAIL,
        error: error
    };
}

export const sendSwapStart = () => {
    return {
        type: actionTypes.SEND_SWAP_START
    };
};

export const sendSwap = ( swapData ) => {
    return dispatch => {
        dispatch( sendSwapStart() );
        SwapService.postSwapRequest(swapData).then(
            response => {
                dispatch(sendSwapSuccess(response.data));
            },
            error => {
                dispatch(sendSwapFail(error));
            }
          );
    };
};

export const sendInit = () => {
    return {
        type: actionTypes.SEND_INIT
    };
};

export const deleteSwapSuccess = ( swapData ) => {
    return {
        type: actionTypes.DELETE_SWAP_SUCCESS,
        swapData: swapData
    };
};

export const deleteSwapFail = ( error ) => {
    return {
        type: actionTypes.DELETE_SWAP_FAIL,
        error: error
    };
}
export const deleteSwap = ( swapData ) => {
    return dispatch => {
        console.log('inside delete swap --- '+swapData);
        SwapService.deleteSwapRequest(swapData.id).then(
            response => {
                dispatch(deleteSwapSuccess(swapData));
            },
            error => {
                dispatch(deleteSwapFail(error));
            }
          );
    };
};

export const fetchMyRequestsSuccess = ( myRequests ) => {
    return {
        type: actionTypes.FETCH_MYREQUESTS_SUCCESS,
        myRequests: myRequests
    };
};

export const fetchMyRequestsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_MYREQUESTS_FAIL,
        error: error
    };
};


export const fetchMyRequests = () => {
    return dispatch => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log('USERID'+user.id);
        SwapService.getMySwaps(user.id).then(
            response => {
                dispatch(fetchMyRequestsSuccess(response.data));
            },
            error => {
                console.log('nside fetchrequestsfail------ '+error);
                dispatch(fetchMyRequestsFail(error));
            }
          );
    };
};




export const fetchItemRequestsSuccess = ( itemrequests ) => {
    return {
        type: actionTypes.FETCH_ITEMREQUESTS_SUCCESS,
        itemrequests: itemrequests
    };
};

export const fetchItemRequestsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ITEMREQUESTS_FAIL,
        error: error
    };
};


export const fetchItemRequests = (itemId) => {
    return dispatch => {
        SwapService.getItemSwaps(itemId).then(
            response => {
                dispatch(fetchItemRequestsSuccess(response.data));
            },
            error => {
                console.log('nside fetchrequestsfail------ '+error);
                dispatch(fetchItemRequestsFail(error));
            }
          );
    };
};




export const performItemRequestsSuccess = ( itemrequests ) => {
    return {
        type: actionTypes.PERFORM_ITEMREQUESTS_SUCCESS,
        itemrequests: itemrequests
    };
};

export const performItemRequestsFail = ( error ) => {
    return {
        type: actionTypes.PERFORM_ITEMREQUESTS_FAIL,
        error: error
    };
};


export const performItemRequests = (requestId) => {
    return dispatch => {
        SwapService.performSwapRequest(requestId).then(
            response => {
                console.log(response.data);
                dispatch(performItemRequestsSuccess(response.data));
            },
            error => {
                console.log('nside performrequestsfail------ '+error);
                dispatch(performItemRequestsFail(error));
            }
          );
    };
};



export const deleteItemRequestsSuccess = ( itemrequests ) => {
    return {
        type: actionTypes.CANCEL_ITEMREQUESTS_SUCCESS,
        itemrequests: itemrequests
    };
};

export const deleteItemRequestsFail = ( error ) => {
    return {
        type: actionTypes.CANCEL_ITEMREQUESTS_FAIL,
        error: error
    };
};


export const deleteItemRequests = (requestId) => {
    return dispatch => {
        SwapService.deleteSwapRequest(requestId).then(
            response => {
                console.log(response.data);
                dispatch(deleteItemRequestsSuccess(requestId));
            },
            error => {
                console.log('nside deleterequestsfail------ '+error);
                dispatch(deleteItemRequestsFail(error));
            }
          );
    };
};