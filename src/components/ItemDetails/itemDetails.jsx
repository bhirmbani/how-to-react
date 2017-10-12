import React from "react";
import { shape, string, number } from 'prop-types';

const ItemDetails = props => (
  <div>
    <h3>{props.item.name}</h3>
    <p>{props.item.price}</p>
  </div>
);

ItemDetails.propTypes = {
  item: shape({
    name: string.isRequired,
    price: number.isRequired
  }).isRequired
}

export default ItemDetails;
