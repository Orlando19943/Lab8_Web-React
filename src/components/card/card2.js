import React from "react";
import imagen1 from "../../imagenes/imagen1.png"
class ShowCard extends React.Component {
  render() {
    return (
      <div className="row" onClick={this.props.handleClick}>
        <div className="col-4">
          <div className="card">
            <img
              className="card-img-top"
              src= {imagen1}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCard;