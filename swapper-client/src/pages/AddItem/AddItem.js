import React, { Component } from 'react';
import { connect } from "react-redux";
import './AddItem.css';
import * as actions from "../../actions/index";
import {history} from '../../helpers/history';
class AddItem extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
            itemdata: {
                id:"asdf",
                name: "",
                category: "",
                description: "",
                releaseDate: "",
                userId: "",
                username: "",
                warehouse:0
            }
          };
    }
    
      onChangeName(e) {
        this.setState({ 
            itemdata: { ...this.state.itemdata, name: e.target.value
            } });
      }
      onChangeCategory(e) {
        this.setState({ 
            itemdata: { ...this.state.itemdata, category: e.target.value
            } });
      }
      onChangeDescription(e) {
        this.setState({ 
            itemdata: { ...this.state.itemdata, description: e.target.value
            } });
      }

      onSubmit(e) {
        e.preventDefault();
        let newDate = new Date();
        const user = JSON.parse(localStorage.getItem("user"));
        const itemData= {
            id:"asdf",
            name: this.state.itemdata.name,
            category: this.state.itemdata.category,
            description: this.state.itemdata.description,
            releaseDate: "asas",
            userId: user.id,
            username: user.username,
            warehouse:0
        };
        this.props.onAddItem(itemData);
        history.push('/myitems');
      }
    componentDidMount() {
        //this.setState({categories:categories});
        this.props.onFetchCategories();
    }
    
    render () {
        console.log('inside render  ' +this.props.categories[0]);
        return (
            <div class="container"> <div class=" text-center mt-5 ">
            <h1>Add an Item</h1>
        </div>
        <div class="row ">
            <div class="col-lg-7 mx-auto">
                <div class="card mt-2 mx-auto p-4 bg-light">
                    <div class="card-body bg-light">
                        <div class="container">
                            <form onSubmit={this.onSubmit} id="contact-form" role="form">
                                <div class="controls">
                                    <div class="row">
                                        
                                        <div class="col-md-10">
                                            <div class="form-group"> <label for="form_lastname">Name *</label> <input  onChange={this.onChangeName} id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter item name *" required="required" data-error="Name is required."/> </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group"> <label for="form_need">Category *</label> <select  onChange={this.onChangeCategory} id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                    <option value="" selected disabled>--Select Category--</option>
                                                  {this.props.categories.map(item => (
                                                    <option value={item.id}>{item.name}</option>
                                                ))}
                                                </select> </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group"> <label for="form_message">Description *</label> <textarea  onChange={this.onChangeDescription} id="form_message" name="message" class="form-control" placeholder="Write your description here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                        </div>
                                        <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Add"/> </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
        );
};
}
const mapStateToProps = (state, props) =>  {
  
    
    return {
      categories:state.categories.categories
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchCategories: () => dispatch( actions.fetchCategories() ),
      onAddItem: (itemData) => dispatch( actions.addItem(itemData) )
    };
  };
//export default AddItem;
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);