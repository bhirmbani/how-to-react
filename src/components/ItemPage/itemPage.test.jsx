import React from "react";
import { shallow } from "enzyme";

import preload from "../../mock/api.json";
import ItemPage from "./itemPage";
import ItemDetails from "../ItemDetails/itemDetails";
import filterItemModule from "../modules/filterItem";

test("ItemPage renders correctly", () => {
  const component = shallow(<ItemPage />);
  expect(component).toMatchSnapshot();
});

test("Item page should render correct amount of item", () => {
  const component = shallow(<ItemPage />);
  expect(component.find(ItemDetails).length).toEqual(preload.items.length);
});

test("Item page should render correct amount of items based on search term", () => {
  const searchWord = "tv";
  const component = shallow(<ItemPage />);
  component.find("input").simulate("change", {
    target: { value: searchWord }
  })
  const itemCount = filterItemModule(searchWord);
  expect(component.find(ItemDetails).length).toEqual(itemCount.length);
});
