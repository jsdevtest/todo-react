import React from "react";

const Item = ({ label, important }) => {
  const styles = {
    color: important ? "tomato" : null
  };
  return <li style={styles}>{label}</li>;
};

export default Item;
