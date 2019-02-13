import React from 'react';

const Detail = (props) => {
  return (
    <div className="row detail"  style={{ borderColor: '#333'}}>
      <div className="col-md-6">
        <div className="card card-inverse">
          <img className="card-img " src={props.show.poster} alt="Card image cap" />
          <div className="card-img-overlay">
            <h4 className="card-title">{props.show.show_title}</h4>
          </div>
        </div>
      </div>
      <div className="col-md-6">
            <p className="lead">{props.show.summary}</p>
        </div>
    </div>
  );
}

export default Detail;
