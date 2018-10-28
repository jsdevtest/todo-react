import React, { Component } from "react"

class Search extends Component {
  state = {
    search: ""
  }

  onSeachChange = event => {
    const search = event.target.value
    this.setState({ search })
    this.props.onSearchChange(search)
  }

  render() {
    return (
      <input
        type="text"
        placeholder={"type to search"}
        value={this.state.search}
        onChange={this.onSeachChange}
      />
    )
  }
}

export default Search
