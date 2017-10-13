import React, { Component } from "react";

import mockData from "../../mock/api.json";
import ItemDetails from "../ItemDetails/itemDetails";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
          type="text"
          placeholder="Search..."
        />
        {mockData.items.map(item => <ItemDetails key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ItemPage;
