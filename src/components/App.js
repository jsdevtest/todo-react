import React from "react"

import List from "./List"
import Header from "./Header"
import Search from "./Search"
import Filter from "./Filter"

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee" },
    { id: 2, label: "Make Awesome App" },
    { id: 3, label: "Have a lunch" }
  ]
  return (
    <React.Fragment>
      <Header />
      <Search />
      <Filter />
      <List todos={todoData} />
    </React.Fragment>
  )
}

export default App
