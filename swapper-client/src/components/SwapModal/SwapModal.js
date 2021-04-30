import React, { Component } from 'react';
import './SwapModal.css';
import { connect } from "react-redux";
import * as actions from '../../actions/index';
class SwapModal extends Component{
    state={
        selectedItemId:"0"
    }
    componentDidMount(){
        this.props.onFetchMyItems(); 
        console.log(this.props.myitems);
    }
    change =(event) =>{
        this.setState( {  selectedItemId: event.target.value } );
    }

    clickHandler = () => {
        if(this.props.warehouse==="0"){
            if(this.state.selectedItemId!="0"){
            this.props.submitted(this.state.selectedItemId);
            }
        }
        else{
            this.props.submitted();
        }
      }
    render(){
        let ss=null;
        if(this.props.warehouse==="0"){
            ss=(
                <div class="dropdownModal">
                    <h2>Choose item to Swap</h2>
                    <div class="select">
                    <select name="slct" id="slct"  onChange={this.change}  >
                    <option selected disabled>Choose an option</option>
                    {this.props.myitems.map(item => (
                        <option value={item.id}>{item.name}</option>
                     ))}
                    </select>
                    </div>
                </div>
            );
        }
        else{
            ss=(
                <div class="dropdownModal">
                    <h2>Do you really need this item?</h2>
                </div>
            );
        }
        return(
            <div>
                {ss}
                <div class="buttonModal">
                    <button onClick={this.props.canceled} type="button" class="btn btn-secondary btn-lg">Cancel</button>
                    <button onClick={this.clickHandler}type="button" class="btn btn-primary btn-lg">Send Request</button>   
                </div> 
            </div>
        );
    };
}

const mapStateToProps = (state, props) =>  {
  
    const myitems = state.myitems.myitems;
    return {
       myitems
    };
  };
const mapDispatchToProps = dispatch => {
    return {
        onFetchMyItems: () => dispatch( actions.fetchMyItems() )
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SwapModal);