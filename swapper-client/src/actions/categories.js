import CategoryService from '../services/category-service';
import * as actionTypes from './types';


export const fetchCategoriesSuccess = ( categories ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    };
};

export const fetchCategoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    };
};


export const fetchCategories = () => {
    return dispatch => {
        CategoryService.getCategoriesItem().then(
            response => {
                dispatch(fetchCategoriesSuccess(response.data));
            },
            error => {
                dispatch(fetchCategoriesFail(error));
            }
          );
    };
};