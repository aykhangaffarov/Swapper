import React, { Component } from 'react';
import {Redirect, withRouter} from "react-router-dom";
import './MyProductDetails.css';
import { connect } from "react-redux";
import Modal from '../../UI/Modal/Modal';
import SwapModal from "../../components/SwapModal/SwapModal";
import * as actions from '../../actions/index';
import {history} from '../../helpers/history';
import { Link } from 'react-router-dom';

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

  deleteItemHandler = () =>{
    this.props.onDeleteItem(this.props.item.id);
    history.push('/myitems');
  }
    render(){
      let zz=
      (<div>
        <br/>
        <h5 >Item has no requests</h5>
      </div>
      );
      if(this.props.itemrequests.length>0){
        zz=(
          this.props.itemrequests.map(request => (
            <div class="fb">
            <div class="fb-top">
                <p><b>Item Requests</b><span></span></p>
            </div>
            <img src="" height="100" width="100" alt="Image of woman"/>
            <p class="fbinfo"><Link to={`/items/${request.swapItemId}`}><b>{request.swapItemName}</b></Link> <br/> <span>{request.swapUserName}</span></p>
            <div class="button-block">
                <div class="fbconfirm" onClick={() => {this.performRequestHandler(request.id)}}>Confirm</div>
                <div class="fbdelete" onClick={() => {this.deleteRequestHandler(request.id)}}>Delete Request</div>
            </div>
            <hr/> 
            </div>
              ))
        );
      }
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
          <div> <a href="#"><img src={this.props.item.url}/></a></div>
        </div> 
        <div class="img-small-wrap">
          <div class="item-gallery"> <img src={this.props.item.url}/> </div>
          <div class="item-gallery"> <img src={this.props.item.url}/> </div>
          <div class="item-gallery"> <img src={this.props.item.url}/> </div>
          <div class="item-gallery"> <img src={this.props.item.url}/> </div>
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
          <button onClick={() => {this.deleteItemHandler()}} class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Delete Item </button>
        </article> 
            </aside> 
          </div> 
        </div> 
        <h1>Requests</h1>
        {zz}
        
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
    onSendToWareHouse: (itemId) => dispatch( actions.returnWhItems(itemId)),
    onDeleteItem: (itemId) => dispatch( actions.deleteItem(itemId))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MyProductDetails);