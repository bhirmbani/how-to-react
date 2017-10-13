import React, { Component } from "react";

import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";

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
        {mockData.items
          .filter(
            item =>
              `${item.name} ${item.price}`
                .toLowerCase()
                .indexOf(this.state.searchInput.toLowerCase()) >= 0
          )
          .map(item => <ItemDetails key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ItemPage;
