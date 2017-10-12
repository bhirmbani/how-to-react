import React from "react";

import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";

const ItemPage = () => (
  <div>
    {mockData.items.map(item => (
      <ItemDetails key={item.id} item={item} />
    ))}
  </div>
);

export default ItemPage;
