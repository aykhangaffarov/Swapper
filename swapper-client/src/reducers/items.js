import * as actionTypes from '../actions/types';

const initialState = {
    items: [],
    loading: false,
    curitem:""
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


const fetchAnItemSuccess = ( state, action ) => {
    return updateObject( state, {
        curitem: action.curitem,
        loading: false
    } );
};

const fetchAnItemFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const deleteItemSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false
    } );
};

const deleteItemFail = ( state, action ) => {
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
        case actionTypes.FETCH_ANITEM_SUCCESS: return fetchAnItemSuccess( state, action );
        case actionTypes.FETCH_ANITEM_FAIL: return fetchAnItemFail( state, action );
        case actionTypes.DELETE_ITEM_SUCCESS: return deleteItemSuccess( state, action );
        case actionTypes.DELETE_ITEM_FAIL: return deleteItemFail( state, action );
        default: return state;
    }
};

export default reducer;