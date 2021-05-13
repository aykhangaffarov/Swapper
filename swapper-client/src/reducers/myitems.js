import * as actionTypes from '../actions/types';

const initialState = {
    myitems: [],
    loading: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const fetchMyItemsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchMyItemsSuccess = ( state, action ) => {
    return updateObject( state, {
        myitems: action.myitems,
        loading: false
    } );
};

const fetchMyItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const addItemSuccess = ( state, action ) => {
    return updateObject( state, {
        myitems: action.myitems,
        loading: false
    } );
};

const addItemFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_MYITEMS_START: return fetchMyItemsStart( state, action );
        case actionTypes.FETCH_MYITEMS_SUCCESS: return fetchMyItemsSuccess( state, action );
        case actionTypes.FETCH_MYITEMS_FAIL: return fetchMyItemsFail( state, action );
        case actionTypes.ADD_ITEM_SUCCESS: return addItemSuccess( state, action );
        case actionTypes.ADD_ITEM_FAIL: return addItemFail( state, action );
        default: return state;
    }
};

export default reducer;