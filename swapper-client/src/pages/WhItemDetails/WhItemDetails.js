import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './WhItemDetails.css';
import { connect } from "react-redux";
import Modal from '../../UI/Modal/Modal';
import SwapModal from "../../components/SwapModal/SwapModal";
import * as actions from '../../actions/index';
class WhItemDetails extends Component{

  state={
    show:false,
    requested:false
  }
  componentDidMount(){
    if(this.props.myrequest){
      this.setState({requested:true});
    }
  }
  purchaseCancelHandler = () => {
    this.setState( { show: false } );
}
sendrequestHandler = () => {
  this.setState( { show: true } );
}
cancelrequestHandler = () => {
  this.props.onReturnItem(this.props.item.id);
  this.setState({requested:false});
}
sendRequestHandler = () =>{
  const user = JSON.parse(localStorage.getItem("user"));
  const item={
  id:this.props.item.id,
	name:this.props.item.name,
	category:this.props.item.category,
	description:this.props.item.description,
	releaseDate:this.props.item.releaseDate,
	userId:user.id,
	username:user.username,
	warehouse:0
  }
  this.props.onTakeItem(this.props.item.id, item);
  this.setState( { show: false } );
  this.setState({requested: true})
}
    render(){
      let bt=null;
      if(this.state.requested){
        bt=<button onClick={this.cancelrequestHandler} class="btn btn-lg btn-primary text-uppercase"> Return Item to WareHouse </button>;
      }
      else{
        bt=<button onClick={this.sendrequestHandler} class="btn btn-lg btn-primary text-uppercase"> Take Item </button>;
      }
              return (
          <React.Fragment>
            <Modal show={this.state.show} modalClosed={this.purchaseCancelHandler}>
            <SwapModal warehouse="1" canceled={this.purchaseCancelHandler} submitted={this.sendRequestHandler}/>
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
          {bt}
        </article> 
            </aside> 
          </div> 
        </div> 
        
</React.Fragment>
        );
};
}
const mapStateToProps = (state, props) =>  {
  
  var item = state.item.items.find(item => item.id === props.match.params.id);
  if(state.myitems.myitems.length>0){
    var myrequest=state.myitems.myitems.find(req =>req.id===item.id);
    if(myrequest!=null){
      return {
        myrequest:myrequest,
        item,
        loading: state.myitems.loading
      };
  }
  }
  return {
    item,
    loading: state.myitems.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onTakeItem: (id, item) => dispatch( actions.takeWhItems(id, item) ),
      onReturnItem: (id) => dispatch(actions.returnWhItems(id))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WhItemDetails));