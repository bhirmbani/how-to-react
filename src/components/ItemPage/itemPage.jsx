// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ItemCards from "../ItemCards/itemCards";
import filterItem from "../modules/filterItem";
import Title from "../Title/title";

const FlexParent = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

type State = {
  searchInput: string
};

class ItemPage extends React.Component<{}, State> {
  state = {
    searchInput: ""
  };

  handleSearchInput = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchInput: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Title isItemPage />
        <input
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
          type="text"
          placeholder="Search..."
        />
        <FlexParent>
          {filterItem(this.state.searchInput).map(item => (
            <ItemCards key={item.id} item={item} />
          ))}
        </FlexParent>
        <Link to="/" href="/">
          Go back to home
        </Link>
      </div>
    );
  }
}

export default ItemPage;
