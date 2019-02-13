import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './search_bar';
import Detail from './detail';
import ShowList from './showList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      selectedShow: null,
      error: null
    }
    this.search = this.search.bind(this);

    //this.search('Nicolas Cage');
  }

  search(term) {
    axios.get(`http://netflixroulette.net/api/api.php?actor=${term}`).then((response) => {
      this.setState({
        shows: response.data,
        selectedShow: response.data[0],
        error: null
      });
    }).catch((error) => {
      this.setState({
        error: error.response.data.message
      });
    })
  }

  render() {

    if(this.state.error) {
      return(
        <div className="container">
          <SearchBar onSearch={this.search}/>
          <h1 style={{color: 'red'}}>{this.state.error}</h1>
        </div>
      );
    }

    if(!this.state.selectedShow) {
      return(
        <div className="container">
          <SearchBar onSearch={this.search}/>
          <h1 style={{color: 'white'}}>Procure por um ator</h1>
        </div>
      );
    }

    return (
      <div className="container">
        <SearchBar onSearch={this.search}/>
        <Detail show={this.state.selectedShow} />
        <ShowList shows={this.state.shows} onShowSelect={(selectedShow) => this.setState({selectedShow})}/>
      </div>
    );
  }
}

export default App;
