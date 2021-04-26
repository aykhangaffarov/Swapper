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
        // axios.post( '/orders.json', orderData )
        //     .then( response => {
        //         console.log( response.data );
        //         dispatch( sendSwapSuccess( response.data.name, orderData ) );
        //     } )
        //     .catch( error => {
        //         dispatch( sendSwapFail( error ) );
        //     } );
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