// @flow

import React from "react";
import axios from "axios";

import Loading from "../Loading/loading";

type State = {
  comments: Array<any>,
};

type Props = {
  item: {
    name: string,
    price: number
  }
};

async function fetchComments() {
  try {
    const raw = await axios.get("http://localhost:3003/comment");
    return raw.data.comments;
  } catch (e) {
    return e;
  }
}

class ItemDetails extends React.Component<Props, State> {
  state = {
    comments: []
  };

  componentDidMount() {
    fetchComments().then(data => {
      this.setState({ comments: data });
    });
  }

  render() {
    let data;
    if (this.state.comments) {
      data = this.state.comments;
    } else {
      data = <Loading />;
    }
    return (
      <div>
        <p>
          <strong>{this.props.item.name}</strong>
        </p>
        <p>{this.props.item.price}</p>
        {(data.length > 1) ? data.map(a => (
          <p key={a.id}>{a.content}</p>
        )) : data}
        {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
      </div>
    );
  }
}

export default ItemDetails;
