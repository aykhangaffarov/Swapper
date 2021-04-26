import * as actionTypes from '../actions/types';
import { updateObject } from '../utils/utility';

const initialState = {
    myswaprequests: [],
    loading: false,
    purchased: false
};

const sendInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const sendSwapStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const sendSwapSuccess = ( state, action ) => {
    const newSwap = action.swapData;
    return updateObject( state, {
        loading: false,
        purchased: true,
        myswaprequests: state.myswaprequests.concat( newSwap )
    } );
};

const sendSwapFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEND_INIT: return sendInit( state, action );
        case actionTypes.SEND_SWAP_START: return sendSwapStart( state, action );
        case actionTypes.SEND_SWAP_SUCCESS: return sendSwapSuccess( state, action )
        case actionTypes.SEND_SWAP_FAIL: return sendSwapFail( state, action );
        default: return state;
    }
};

export default reducer;