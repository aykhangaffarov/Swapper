import React, { Component } from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ItemList from '../../containers/ItemList/ItemList';
import CategoryService from '../../services/category-service';

class ItemsMenu extends Component{
    state ={
        categories:[]
    }
    
    componentDidMount() {
        const categories =CategoryService.getCategories();
        this.setState({categories:categories});
    }
    
    render () {
        return (
            <React.Fragment>
                        <CategoryFilter categories={this.state.categories}/>
                        <ItemList/>
            </React.Fragment>
        );
}
}


export default ItemsMenu;