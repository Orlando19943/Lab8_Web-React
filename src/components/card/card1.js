import React from "react";
class HideCard extends React.Component {
  render() {
    return (
      <div className="row" onClick={this.props.handleClick}>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HideCard;