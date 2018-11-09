import React, { Component }     from 'react';
import axios from 'axios';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getAlbums = () => {
    axios.get(`https://itunes.apple.com/search?term=${this.state.query}`)
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
