import React from "react";
import PropTypes from "prop-types";
import CardFlip from "../card/card";
import "./tablero.scss";

export default class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item = this.props;
    return (
      <div className="tablero col">
        {
          item.baraja.map((carta, index) => {
            const estaSiendoComparada = item.parejaSeleccionada.indexOf(carta) > -1;
            return (
              <CardFlip
                // Por lo que estuve investigando, este marco como error porque react se confunde
                // a la hora de actualizar una lista, pero en este caso la lista no se modifica
                // en ningún momento, por lo que se puede dejar esto
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                icono={carta.icono}
                estaSiendoComparada={estaSiendoComparada}
                seleccionarCarta={() => item.seleccionarCarta(carta)}
                fueAdivinada={carta.fueAdivinada}
              />
            );
          })
        }
      </div>
    );
  }
}

Tablero.propTypes = {
  baraja: PropTypes.instanceOf(Array).isRequired,
  parejaSeleccionada: PropTypes.instanceOf(Array).isRequired,
  seleccionarCarta: PropTypes.func.isRequired,
};

CardFlip.defaultProps = {
  seleccionarCarta: false,
  estaSiendoComparada: false,
  fueAdivinada: false,
};
