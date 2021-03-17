
import React from "react";
import ReactCardFlip from "react-flipcard-2";
import "./card.scss";
import imagenReact from "../../imagenes/react.svg";

class CardFlip extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.seleccionarCarta}>
      <ReactCardFlip
        flipped = {this.props.estaSiendoComparada || this.props.fueAdivinada}
        disabled={true}
      >
        <div className="portada">
        <img src = {imagenReact}/>
        </div>
        <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
      </ReactCardFlip>
      </div>

  )
  }
} 



export default CardFlip;