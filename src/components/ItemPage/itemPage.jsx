// @flow

import React from "react";
import { Link } from "react-router-dom";

// import mockData from "../../mock/api.json";
import ItemCards from "../ItemCards/itemCards";
import filterItem from "../modules/filterItem";

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
        <h1>Daftar Barang</h1>
        <input
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
          type="text"
          placeholder="Search..."
        />
        {filterItem(this.state.searchInput).map(item => (
          <ItemCards key={item.id} item={item} />
        ))}
        <Link to="/" href="/">
          Go back to home
        </Link>
      </div>
    );
  }
}

export default ItemPage;
