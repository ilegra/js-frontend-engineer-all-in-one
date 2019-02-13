import React, { Component } from 'react';

import Search from './search';
import List from './list';

class App extends Component {

  constructor(props) {
    super(props);
    //this.filter = this.filter.bind(this);

    this.state = {
      filteredData: data,
      data,
      name: ''
    }
  }


  filter = (term)  => {
    let updateList = this.state.data.filter((item) => {
      return item.toLowerCase().search(term.toLowerCase()) !== -1;
    });
    this.setState({filteredData: updateList })
  }

  render() {
    return (
      <div className="container app">
        <Search filter={this.filter} name="aaaa"/>
        <List data={this.state.filteredData} />
      </div>
    );
  }
}

const data = [
  'Itacolomi - Gravatai',
  'Behne - Ivoti',
  'Gruta - Caxias',
  'Salto Ventoso - Farroupilha',
  'Cascata dos Marins - Cotipora',
  'Pico da Canastra - Tres Coroas',
  'Morro do Chapeu - Sapucaia'
]

export default App;
