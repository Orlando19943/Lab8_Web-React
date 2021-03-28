import React from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "./card.scss";
import imagenReact from "../../imagenes/react.svg";

export default class CardFlip extends React.Component {
  render() {
    const item = this.props;
    return (
      <div role="button" className="carta" onClick={item.seleccionarCarta} onKeyPress={this.handleKeyUp} tabIndex="-1">
        <ReactCardFlip isFlipped={item.estaSiendoComparada || item.fueAdivinada} disabled={0}>
          <div className="portada">
            <img src={imagenReact} alt="memoria" />
          </div>
          <div className="contenido">
            <i className={`fa ${item.icono} fa-5x`} />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

CardFlip.propTypes = {
  seleccionarCarta: PropTypes.func.isRequired,
  estaSiendoComparada: PropTypes.bool.isRequired,
  fueAdivinada: PropTypes.bool.isRequired,
  icono: PropTypes.string.isRequired,
};
