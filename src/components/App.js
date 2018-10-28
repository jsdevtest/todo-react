import React, { Component } from "react"

import List from "./List"
import Header from "./Header"
import Search from "./Search"
import Filter from "./Filter"
import AddForm from "./AddForm"

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
    ],
    search: ""
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
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id)

      // 1. обновляем объект
      const oldItem = todoData[index]
      const newItem = {
        ...oldItem,
        important: !oldItem.important
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
  search(items, search) {
    // если пустая строка
    if (search.length === 0) {
      return items
    }
    return items.filter(
      item =>
        item.label
          .toLowerCase()
          .indexOf(search.toLowerCase()) > -1
    )
  }
  onSearchChange = search => {
    this.setState({ search })
  }
  render() {
    const { todoData, search } = this.state
    // в doneCount только те элементы у которых done = true и их количество
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount
    const visibleItems = this.search(todoData, search)
    return (
      <React.Fragment>
        <Header />
        <div>Done: {doneCount}</div>
        <div>To do: {todoCount}</div>
        <Search onSearchChange={this.onSearchChange} />
        <Filter />
        <List
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddForm onItemAdded={this.addItem} />
      </React.Fragment>
    )
  }
}

export default App
