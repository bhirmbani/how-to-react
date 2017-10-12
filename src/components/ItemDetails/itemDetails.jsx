import React from "react";

const ItemDetails = props => (
  <div key={props.item.id}>
    <h3>{props.item.name}</h3>
    <p>{props.item.price}</p>
  </div>
);

export default ItemDetails;
