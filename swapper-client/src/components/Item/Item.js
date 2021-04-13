import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
const Item = (props) => {

console.log(props.id);
    return (
      <div class="center">
        <div class="property-card">
          <Link to={`/items/${props.id}`}>
            <div class="property-image">
              <div class="property-image-title">
               <h5>{props.category || "Others"}</h5>
              </div>
            </div></Link>
          <div class="property-description">
            <h5>{props.name} </h5>
            <p>{props.description}</p>
          </div>
          <Link to={`/items/${props.id}`}>
            <div class="property-social-icons">
            </div>
          </Link>
        </div>
      </div>
    );
};

export default Item;

