import React, { Component } from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import ItemList from '../../containers/ItemList/ItemList';
import CategoryService from '../../services/category-service';

class WarehouseMenu extends Component{
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
                        <h2>WareHouse</h2>
                        <ItemList warehouse="1"/>
            </React.Fragment>
        );
}
}


export default WarehouseMenu;