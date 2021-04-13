import React, { Component } from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ItemList from '../../containers/ItemList/ItemList';
import CategoryService from '../../services/category-service';

class ItemsMenu extends Component{
        
    
    render () {
        const categoriess =CategoryService.getCategories();
        console.log(categoriess);
        return (
            <React.Fragment>
                        <CategoryFilter categories={categoriess}/>
                        <ItemList/>
            </React.Fragment>
        );
}
}


export default ItemsMenu;