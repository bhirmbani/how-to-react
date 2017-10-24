// @flow

import mockData from "../../mock/api.json";

const filterItemMethod = (input: string) => {
  const filterItemResult = mockData.items.filter(
    item =>
      `${item.name} ${item.price}`.toLowerCase().indexOf(input.toLowerCase()) >=
      0
  );
  return filterItemResult;
};

export default filterItemMethod;
