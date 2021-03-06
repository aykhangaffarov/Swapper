import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/Item/Item';
import './ItemList.css';
import * as actions from '../../actions/index';
import categoryFilter from '../../pipes/categoryFilter';
class ItemList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    componentDidMount () {
        if(this.props.warehouse=="0"){
            this.props.onFetchItems();
            this.props.onFetchMyRequests();
        }
        else{
            this.props.onFetchWhItems();
            this.props.onFetchMyRequests();
        }
    }

    render () {
        let items="";
        if ( !this.props.loading ) {
             items = this.props.items.map( item => (
                <Item
                    key={item.id}
                    warehouse={this.props.warehouse}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    description={item.description}
                    url={item.url} />
            ) )
        }
        return (
            <div class="itemlist-wrapper"> 
                    {items}    
            </div>     
        );
    }
}
const mapStateToProps = state => {
    const categories = state.categoryFilter;
    const filterByCategoryArr = categoryFilter(state.item.items, categories);
    return {
        items: filterByCategoryArr,
        loading: state.item.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchItems: () => dispatch( actions.fetchItems() ),
        onFetchWhItems: () => dispatch( actions.fetchWhItems() ),
        onFetchMyRequests: () => dispatch( actions.fetchMyRequests())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
//export default ItemList;