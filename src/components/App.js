import React, { Component } from "react"

import List from "./List"
import Header from "./Header"
import Search from "./Search"
import Filter from "./Filter"

class App extends Component {
  state = {
    todoData: [
      { id: 1, label: "Drink Coffee" },
      { id: 2, label: "Make Awesome App" },
      { id: 3, label: "Have a lunch" }
    ]
  }
  addItem = () => {
    const todoData = [...this.state.todoData] // копия, поскольку метод меняет исходный массив а стейт нельзя менять напрямую, те, что не меняют можно юзать без копии
    // действие
    const newItem = {
      id: Math.max(...todoData.map(item => item.id)) + 1, // max + 1
      label: "ssdc"
    }
    todoData.push(newItem)
    this.setState({ todoData }) // в состояние
  }
  deleteItem = id => {
    // передаем функцию, поскольку новый стейт это старый стейт без одного элемента
    this.setState(state => ({
      todoData: state.todoData.filter(el => el.id !== id)
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <button onClick={this.addItem}>Добавить</button>
        <Search />
        <Filter />
        <List
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
      </React.Fragment>
    )
  }
}

export default App
