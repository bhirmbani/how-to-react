// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: peru;
`;

const ItemDetails = (props: {
  item: {
    name: string,
    price: number
  }
}) => (
  <Wrapper>
    <h3>{props.item.name}</h3>
    <p>{props.item.price}</p>
  </Wrapper>
);

export default ItemDetails;
