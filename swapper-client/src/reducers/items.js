import * as actionTypes from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const fetchItemsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchItemsSuccess = ( state, action ) => {
    return updateObject( state, {
        items: action.items,
        loading: false
    } );
};

const fetchItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const fetchWhItemsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchWhItemsSuccess = ( state, action ) => {
    return updateObject( state, {
        items: action.items,
        loading: false
    } );
};

const fetchWhItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

/*********** take Whitem */

const takeWhItemsSuccess = ( state, action ) => {
    const updatedItem=action.items;
   console.log('*********Here is updateditem in reducers   '+updatedItem.id);
    return updateObject( state, {
        items: state.items.filter(item => item.id !== updatedItem.id).concat(updatedItem),
        loading: false
    } );
};

const takeWhItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};



/*********** return Whitem */

const returnWhItemsSuccess = ( state, action ) => {
    const updatedItem=action.items;
    return updateObject( state, {
        items: state.items.concat(updatedItem),
        loading: false
    } );
};

const returnWhItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart( state, action );
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess( state, action );
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail( state, action );
        case actionTypes.FETCH_WHITEMS_START: return fetchWhItemsStart( state, action );
        case actionTypes.FETCH_WHITEMS_SUCCESS: return fetchWhItemsSuccess( state, action );
        case actionTypes.FETCH_WHITEMS_FAIL: return fetchWhItemsFail( state, action );
        case actionTypes.TAKE_WHITEM_SUCCESS: return takeWhItemsSuccess( state, action );
        case actionTypes.TAKE_WHITEM_FAIL: return takeWhItemsFail( state, action );
        case actionTypes.RETURN_WHITEM_SUCCESS: return returnWhItemsSuccess( state, action );
        case actionTypes.RETURN_WHITEM_FAIL: return returnWhItemsFail( state, action );
        default: return state;
    }
};

export default reducer;