
import React from "react";
import ReactCardFlip from "react-flipcard-2";
import "./card.scss";
import imagenReact from "../../imagenes/react.svg";

class CardFlip extends React.Component {
  render() {
    return (
      <ReactCardFlip>
        <div className="portada">
        <img src = {imagenReact}/>
        </div>
        <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
      </ReactCardFlip>

  )
  }
} 



export default CardFlip;