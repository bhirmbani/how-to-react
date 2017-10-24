// @flow

import mockData from "../../mock/api.json";

const method = (input: string) => {
  const result = mockData.items.filter(
    item =>
      `${item.name} ${item.price}`.toLowerCase().indexOf(input.toLowerCase()) >=
      0
  );
  return result;
};

export default method;
