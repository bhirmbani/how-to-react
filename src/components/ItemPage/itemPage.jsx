import React from "react";

import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";

const ItemPage = () => (
  <div>
    {mockData.items.map(item => (
      <ItemDetails item={item} />
    ))}
  </div>
);

export default ItemPage;
