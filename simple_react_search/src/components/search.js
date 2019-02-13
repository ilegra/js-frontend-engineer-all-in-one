import React from 'react';


const Search = (props) => {
  console.log(props.name);
    return (
      <div>
        <input className="form-control" onChange={event => props.filter(event.target.value)}/>
      </div>
    );
  }


export default Search;
