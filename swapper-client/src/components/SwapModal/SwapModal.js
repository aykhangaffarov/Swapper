import React, { Component } from 'react';
import './SwapModal.css';

class SwapModal extends Component{
    state={
        selectedItemId:"0"
    }

    change =(event) =>{
        this.setState( {  selectedItemId: event.target.value } );
    }
    render(){
        return(
            <div>
                <div class="dropdownModal">
                    <h2>Choose item to Swap</h2>
                    <div class="select">
                    <select name="slct" id="slct"  onChange={this.change}  >
                        <option selected disabled>Choose an option</option>
                        <option value="1">Pure CSS</option>
                        <option value="2">No JS</option>
                        <option value="3">Nice!</option>
                    </select>
                    </div>
                </div>
                <div class="buttonModal">
                    <button onClick={this.props.canceled} type="button" class="btn btn-secondary btn-lg">Cancel</button>
                    <button onClick={()=>this.props.submitted(this.state.selectedItemId)}type="button" class="btn btn-primary btn-lg">Send Request</button>   
                </div> 
            </div>
        );
    };
}

export default SwapModal;