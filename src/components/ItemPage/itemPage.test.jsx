import React from "react";
import { shallow } from 'enzyme';
import ItemPage from "./itemPage";

test("ItemPage renders correctly", () => {
  const component = shallow(<ItemPage />);
  expect(component).toMatchSnapshot();
});
