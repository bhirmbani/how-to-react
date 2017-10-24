// @flow

import React from "react";

const ItemDetails = (props: {
  item: {
    name: string,
    price: number
  }
}) => (
  <div>
    <p><strong>{props.item.name}</strong></p>
    <p>{props.item.price}</p>
    {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
  </div>
)

export default ItemDetails;