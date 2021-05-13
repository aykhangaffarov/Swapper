import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './MyProductDetails.css';
import { connect } from "react-redux";
import Modal from '../../UI/Modal/Modal';
import SwapModal from "../../components/SwapModal/SwapModal";
import * as actions from '../../actions/index';
import {history} from '../../helpers/history';
class MyProductDetails extends Component{

  state={
    show:false,
  }
  componentDidMount(){
    this.props.onFetchRequests(this.props.match.params.id);
  }

  performRequestHandler = (requestId) =>{
    this.props.onPerformRequests(requestId);
  }
  deleteRequestHandler = (requestId) =>{
    this.props.onDeleteRequests(requestId);
  }
  sendToWhHandler = () =>{
    this.props.onSendToWareHouse(this.props.item.id);
    history.push('/myitems');
  }
    render(){
      
              return (
          <React.Fragment>
            <Modal show={this.state.show} modalClosed={this.purchaseCancelHandler}>
            <SwapModal warehouse="0" myitems={this.props.myitems} canceled={this.purchaseCancelHandler} submitted={this.sendRequestHandler}/>
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
          <hr/><button onClick={() => {this.sendToWhHandler()}} class="btn btn-lg btn-primary text-uppercase"> Send to WareHouse </button>
          <button onClick={this.sendrequestHandler} class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Delete Item </button>
        </article> 
            </aside> 
          </div> 
        </div> 
        <h1>Requests</h1>
        {this.props.itemrequests.map(request => (
                   <div class="fb">
                   <div class="fb-top">
                       <p><b>Item Requests</b><span></span></p>
                   </div>
                   <img src="https://s13.postimg.org/xgla0jo4n/image.jpg" height="100" width="100" alt="Image of woman"/>
                   <p class="fbinfo"><b>{request.swapItemName}</b> <br/> <span>{request.swapUserName}</span></p>
                   <div class="button-block">
                       <div class="fbconfirm" onClick={() => {this.performRequestHandler(request.id)}}>Confirm</div>
                       <div class="fbdelete" onClick={() => {this.deleteRequestHandler(request.id)}}>Delete Request</div>
                   </div>
                   <hr/> 
                   </div>
                     ))}
        
</React.Fragment>
        );
};
}
const mapStateToProps = (state, props) =>  {
  
  var item = state.myitems.myitems.find(item => item.id === props.match.params.id);
  
  return {
    item,
    loading: state.myitems.loading,
    itemrequests:state.myswaprequests.itemrequests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRequests: (itemId) => dispatch( actions.fetchItemRequests(itemId) ),
    onPerformRequests: (requestId) => dispatch( actions.performItemRequests(requestId) ),
    onDeleteRequests: (requestId) => dispatch( actions.deleteItemRequests(requestId) ),
    onSendToWareHouse: (itemId) => dispatch( actions.returnWhItems(itemId))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MyProductDetails);