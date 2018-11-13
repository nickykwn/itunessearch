import React, { Component }     from 'react';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getAlbums = () => {
    fetch(`https://itunes.apple.com/search?term=${this.state.query}`)
    .then(({data }) => {
      this.setState({
        results: data.data
      })
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render(){
    return (
      <form>
        <input
          placeholder="Search for: "
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

export default Search;
