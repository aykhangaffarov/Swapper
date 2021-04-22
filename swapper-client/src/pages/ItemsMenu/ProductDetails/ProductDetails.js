import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './ProductDetails.css';
import { connect } from "react-redux";
import Modal from '../../../UI/Modal/Modal';
import SwapModal from "../../../components/SwapModal/SwapModal";
class ProductDetails extends Component{

  state={
    show:false
  }
  purchaseCancelHandler = () => {
    this.setState( { show: false } );
}
purchaseHandler = () => {
  this.setState( { show: true } );
}
sendRequestHandler = (param) =>{
console.log(param);
}
    render(){
        return (
          <React.Fragment>
            <Modal show={this.state.show} modalClosed={this.purchaseCancelHandler}>
              <SwapModal canceled={this.purchaseCancelHandler} submitted={this.sendRequestHandler}/>
            </Modal>
        <div class="card">
          <div class="row">
            <aside class="col-sm-5 border-right">
        <article class="gallery-wrap"> 
        <div class="img-big-wrap">
          <div> <a href="#"><img src="https://lh3.googleusercontent.com/proxy/rDH_EY1-EYN9F8EaPboGOa5EtX3CDg8IqLelGp5oeFaZXtB2S2OVAXq0S2TRNRQuWD39M3LhG9tKag1pqAcZxjItz7aTp672C-7VkQ"/></a></div>
        </div> 
        <div class="img-small-wrap">
          <div class="item-gallery"> <img src="https://lh3.googleusercontent.com/proxy/rDH_EY1-EYN9F8EaPboGOa5EtX3CDg8IqLelGp5oeFaZXtB2S2OVAXq0S2TRNRQuWD39M3LhG9tKag1pqAcZxjItz7aTp672C-7VkQ"/> </div>
          <div class="item-gallery"> <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/> </div>
          <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
          <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
        </div> 
        </article> 
            </aside>
            <aside class="col-sm-7">
        <article class="card-body p-5">
          <h3 class="title mb-3">{this.props.item.name}</h3>


        <dl class="item-property">
          <dt>Description</dt>
          <dd><p>{this.props.item.description}</p></dd>
        </dl>
        <dl class="param param-feature">
          <dt>Category</dt>
          <dd>{this.props.item.category}</dd>
        </dl>  
        <dl class="param param-feature">
          <dt>User:</dt>
          <dd>{this.props.item.username}</dd>
        </dl>  
          <hr/>
          <button onClick={this.purchaseHandler} class="btn btn-lg btn-primary text-uppercase"> Send Swap Request </button>
          <button onClick={this.purchaseHandler} class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Add new Item to Swap </button>
        </article> 
            </aside> 
          </div> 
        </div> 
        
</React.Fragment>
        );
};
}
const mapStateToProps = (state, props) =>  {
  
  const item = state.item.items.find(item => item.id == props.match.params.id);
  return {
     item
  };
};

export default connect(mapStateToProps,null)(withRouter(ProductDetails));