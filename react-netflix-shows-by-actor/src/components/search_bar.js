import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: ''}
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  onChange(value) {
    this.setState({term:value});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit.bind(this)}>
         <input value={this.state.term} type="text" className="form-control" placeholder="Search for..." onChange={event => this.onChange(event.target.value)} />
         <span className="input-group-btn">
           <button className="btn btn-secondary" type="submit">Go!</button>
         </span>
      </form>
    );
  }
}

export default SearchBar;
