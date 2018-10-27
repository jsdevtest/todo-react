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
    this.setState(({ important }) => ({
      important: !important
    }))
  }

  render() {
    const { label, onDeleted } = this.props
    const { important, done } = this.state
    return (
      <div
        style={[
          important && styles.important,
          done && styles.done
        ]}
      >
        <div onClick={this.onItemClick}>{label}</div>
        <button onClick={this.onImportantClick}>!</button>
        <button onClick={onDeleted}>X</button>
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
