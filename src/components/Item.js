import React, { Component } from "react"
import Radium from "radium"

class Item extends Component {
  state = {
    important: false,
    done: false
  }
  onItemClick = () => {
    this.setState(({ done }) => ({
      done: !done
    }))
  }
  onImportantClick = e => {
    e.stopPropagation()
    this.setState(({ important }) => ({
      important: !important
    }))
  }
  render() {
    const { label } = this.props
    const { important, done } = this.state
    return (
      <div
        style={[important && styles.important, done && styles.done]}
        onClick={this.onItemClick}>
        {label}
        <button onClick={this.onImportantClick}>важная</button>
      </div>
    )
  }
}

const styles = {
  important: {
    fontWeight: "bold"
  },
  done: {
    textDecoration: "line-through"
  }
}

export default Radium(Item)
