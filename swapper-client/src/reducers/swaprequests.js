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
const deleteSwapSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        purchased: true,
        myswaprequests: state.myswaprequests.filter(item => item.id !== action.swapData.id)
    } );
};

const deleteSwapFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const fetchMyRequestsSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        purchased: true,
        myswaprequests: action.myRequests
    } );
};

const fetchMyRequestsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEND_INIT: return sendInit( state, action );
        case actionTypes.SEND_SWAP_START: return sendSwapStart( state, action );
        case actionTypes.SEND_SWAP_SUCCESS: return sendSwapSuccess( state, action )
        case actionTypes.SEND_SWAP_FAIL: return sendSwapFail( state, action );
        case actionTypes.DELETE_SWAP_SUCCESS: return deleteSwapSuccess( state, action );
        case actionTypes.DELETE_SWAP_FAIL: return deleteSwapFail( state, action );
        case actionTypes.FETCH_MYREQUESTS_SUCCESS: return fetchMyRequestsSuccess( state, action );
        case actionTypes.FETCH_MYREQUESTS_FAIL: return fetchMyRequestsFail( state, action );
        default: return state;
    }
};

export default reducer;