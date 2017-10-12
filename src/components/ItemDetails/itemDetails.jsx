import React from "react";
import { shape, string, number } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: peru;
`;

const ItemDetails = props => (
  <Wrapper>
    <h3>{props.item.name}</h3>
    <p>{props.item.price}</p>
  </Wrapper>
);

ItemDetails.propTypes = {
  item: shape({
    name: string.isRequired,
    price: number.isRequired
  }).isRequired
};

export default ItemDetails;
