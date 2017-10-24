import React from "react";
import { shallow } from "enzyme";

import preload from "../../mock/api.json";
import ItemPage from "./itemPage";
import ItemCards from "../ItemCards/itemCards";
import filterItemModule from "../modules/filterItem";

test("ItemPage renders correctly", () => {
  const component = shallow(<ItemPage />);
  expect(component).toMatchSnapshot();
});

test("Item page should render correct amount of item", () => {
  const component = shallow(<ItemPage />);
  expect(component.find(ItemCards).length).toEqual(preload.items.length);
});

test("Item page should render correct amount of items based on search term", () => {
  const searchWord = "tv";
  const component = shallow(<ItemPage />);
  component.find("input").simulate("change", {
    currentTarget: { value: searchWord }
  })
  const itemCount = filterItemModule(searchWord);
  expect(component.find(ItemCards).length).toEqual(itemCount.length);
});
