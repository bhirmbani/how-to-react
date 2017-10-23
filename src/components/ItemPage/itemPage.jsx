import React, { Component } from "react";

// import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";
import filterItem from "../modules/filterItem";

class ItemPage extends Component {
  state = {
    searchInput: ""
  };

  handleSearchInput = e => {
    this.setState({ searchInput: e.target.value });
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
        {filterItem(this.state.searchInput)
          .map(item => <ItemDetails key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ItemPage;
