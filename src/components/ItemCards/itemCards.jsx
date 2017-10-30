// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkToDetail = styled(Link)`
  color: blue;
`;

const Wrapper = styled.div`
  background-color: yellow;
  padding: 20px;
  margin: 10px;
`;

const ItemCards = (props: {
  item: {
    id: number,
    name: string,
    price: number
  }
}) => (
  <Wrapper>
    <h3>{props.item.name}</h3>
    <p>{props.item.price}</p>
    <LinkToDetail to={`/item/${props.item.id}`}>Go to detail..</LinkToDetail>
  </Wrapper>
);

export default ItemCards;
