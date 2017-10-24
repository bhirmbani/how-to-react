// @flow

import preload from "../mock/api.json";

const method = (props: {
  match: {
    params: { id: string }
  }
}) => {
  const result = preload.items.find(
    item => Number(props.match.params.id) === item.id
  );
  return result;
};

export default method;
