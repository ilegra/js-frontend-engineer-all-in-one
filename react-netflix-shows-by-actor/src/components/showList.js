import React from 'react';
import ShowItem from './showItem';

const ShowList = (props) => {
  const shows = props.shows.map((show) => {
    if(show.poster) {
      return <ShowItem show={show} key={show.show_id} onShowSelect={props.onShowSelect} />
    }
  });
  return (
    <div className="card-group col-md-12">
      {shows}
    </div>
  );
}

export default ShowList;
