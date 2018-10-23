import React from "react";

import List from "./List";
import Header from "./Header";
import Search from "./Search";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Make Awesome App", important: true },
    { id: 3, label: "Have a lunch", important: false }
  ];
  return (
    <React.Fragment>
      <Header />
      <Search />
      <List todos={todoData} />
    </React.Fragment>
  );
};

export default App;
