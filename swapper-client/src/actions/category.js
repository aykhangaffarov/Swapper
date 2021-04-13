import * as actionTypes from './types';
export const addCategoryToFilter = category => {
    return {
        type: actionTypes.ADD_CATEGORY_TO_FILTER,
        category
    }
};


export const removeCategoryFromFilter = category => {
    return  {
        type: actionTypes.REMOVE_CATEGORY_FROM_FILTER,
        category
    }
};