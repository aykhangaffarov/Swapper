import React, { Component } from 'react';
import { connect } from "react-redux";
import './MyItems.css';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
class MyItems extends Component{
    
    
    componentDidMount() {
        this.props.onFetchMyItems(); 
    }
    
    render () {
        let ff= ( 
        <li class="list-group-item clearfix">
        <h3 class="list-group-item-heading">
            You don't have items
        </h3>
        <p class="list-group-item-text lead">
            <br />
        </p>
        <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
            <Link to={`/addItem`} class="btn btn-primary">Click to Add</Link>
        </div>
        <hr size="10"/>
        </li>
        );
        if(this.props.myitems.length>0){
            ff= (
                this.props.myitems.map(item => (
                    <li class="list-group-item clearfix">
                    <img class="img-responsive img-rounded" src={item.url} alt=""/>
                    <h3 class="list-group-item-heading">
                        {item.name}
                    </h3>
                    <p class="list-group-item-text lead">
                        Description : {item.description}
                        <br />
                    </p>
                    <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
                        <Link to={`/myitems/${item.id}`} class="btn btn-primary">Details</Link>
                    </div>
                    <hr size="10"/>
                    </li>
                    
                  ))
            );
        }
        return (
            <div class="myitem">
            <div class="container">
                <ul class="list-group">
                {ff}
                </ul>
            </div>
            </div>
        );
}
}

const mapStateToProps = (state, props) =>  {
    const myitems = state.myitems.myitems;
    return {
       myitems
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onFetchMyItems: () => dispatch( actions.fetchMyItems())
    };
  };
 export default connect(mapStateToProps,mapDispatchToProps)(MyItems);
