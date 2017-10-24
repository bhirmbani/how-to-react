// @flow

import React from "react";

const Title = (props: { isItemPage?: boolean }) => {
  let titleMsg;
  if (props.isItemPage) {
    titleMsg = <h1>Daftar Barang</h1>
  } else {
    titleMsg = <h1>Jual Barang</h1>
  }
  return (
    <div>
      {titleMsg}
    </div>
  );
};

Title.defaultProps = {
  isItemPage: false
}

export default Title;
