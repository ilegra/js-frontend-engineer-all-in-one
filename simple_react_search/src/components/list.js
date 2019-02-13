import React from 'react';

const List = (props) => {
  if(!props.data){
    return <h1>no donuts for you!</h1>
  }

  return(
    <div className="list-group">
      {props.data.map((item) => {
        return <a className="list-group-item list-group-item-action list-group-item-info" key={item}>{item}</a>;
      })}
    </div>
  )
}


export default List;
