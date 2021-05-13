import * as actionTypes from '../actions/types';
const initialState = {
    categories: [],
    loading: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


const fetchCategoriesSuccess = ( state, action ) => {
    return updateObject( state, {
        categories: action.categories,
        loading: false
    } );
};

const fetchCategoriesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess( state, action );
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail( state, action );
        default: return state;
    }
};

export default reducer;