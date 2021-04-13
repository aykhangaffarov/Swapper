import React from 'react';
import './Item.css';
const Item = (props) => {


    return (
      <div class="center">
        <div class="property-card">
          <a href="">
            <div class="property-image">
              <div class="property-image-title">
               <h5>{props.category || "Others"}</h5>
              </div>
            </div></a>
          <div class="property-description">
            <h5>{props.name} </h5>
            <p>{props.description}</p>
          </div>
          <a href="">
            <div class="property-social-icons">
            </div>
          </a>
        </div>
      </div>
    );
};

export default Item;

