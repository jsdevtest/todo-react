import React, { Component } from "react"

import List from "./List"
import Header from "./Header"
import Search from "./Search"
import Filter from "./Filter"

class App extends Component {
  state = {
    todoData: [
      {
        id: 1,
        label: "Drink Coffee",
        done: false,
        important: false
      },
      {
        id: 2,
        label: "Make Awesome App",
        done: false,
        important: true
      },
      {
        id: 3,
        label: "Have a lunch",
        done: true,
        important: false
      }
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
  onToggleImportant = id => {
    console.log("Toggle Important", id)
  }
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)

      // 1. обновляем объект
      const oldItem = todoData[index]
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      }
      // 2. заносим в массив
      const newArray = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }
  render() {
    // в doneCount только те элементы у которых done = true и их количество
    const doneCount = this.state.todoData.filter(el => el.done).length
    const todoCount = this.state.todoData.length - doneCount
    return (
      <React.Fragment>
        <Header />
        <div>Done: {doneCount}</div>
        <div>To do: {todoCount}</div>
        <button onClick={this.addItem}>Добавить</button>
        <Search />
        <Filter />
        <List
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </React.Fragment>
    )
  }
}

export default App
