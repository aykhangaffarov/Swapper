import * as actionTypes from '../actions/types';


export const  categoryFilterReducer = (state = '', action) => {
    switch (action.type) {
        case actionTypes.ADD_CATEGORY_TO_FILTER:
            if(state.includes(action.category)) return state;
            return state += action.category;
        case actionTypes.REMOVE_CATEGORY_FROM_FILTER:
            console.log('remove category', action);
            const reg = new RegExp(action.category, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};

export default categoryFilterReducer;