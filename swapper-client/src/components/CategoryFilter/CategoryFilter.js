import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CategoryFilter.css';
import * as actions from '../../actions/index';
const CategoryFilter = (props) => {
    const {dispatch, categoryItemscount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(value) {
            dispatch(actions.addCategoryToFilter(name));
        } else {
            dispatch(actions.removeCategoryFromFilter(name));
        }
    };
    return (
        <div className="boxes_category">
            <h1>Categories</h1>
            {props.categories.map(category => (
            <React.Fragment>
                <input id={category} name={category} type='checkbox' onInput={handleSelectBox}/>
                <label for={category}>
                    <span></span>
                    {category} ({categoryItemscount[category]})
                    <ins><i>{category} ({categoryItemscount[category]})</i></ins>
                </label>
            </React.Fragment>
            ))}

        </div>
    );

};

const mapStateToProps = (state) => {

const categoryItemscount = {};

state.item.items.forEach(p => {
    categoryItemscount[p.category] = categoryItemscount[p.category] + 1 || 1;
});


return {
    categoryItemscount
}

};

//export default connect(mapStateToProps)(BrandFilter);

export default connect(mapStateToProps)(CategoryFilter);
