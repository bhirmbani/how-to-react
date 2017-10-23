import mockData from "../../mock/api.json";

const methods = input => {
  const result = mockData.items.filter(
    item =>
      `${item.name} ${item.price}`.toLowerCase().indexOf(input.toLowerCase()) >=
      0
  );
  return result;
};

export default methods;
