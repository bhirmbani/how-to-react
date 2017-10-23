// @flow

import React from "react";

// import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";
import filterItem from "../modules/filterItem";

type State = {
  searchInput: string,
}

class ItemPage extends React.Component<{}, State> {
  state = {
    searchInput: ''
  };

  handleSearchInput = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchInput: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
          type="text"
          placeholder="Search..."
        />
        {filterItem(this.state.searchInput).map(item => (
          <ItemDetails key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default ItemPage;
