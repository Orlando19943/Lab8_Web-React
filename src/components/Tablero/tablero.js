import React, { Component }from "react";
import CardFlip from "../card/card";
import './tablero.scss';
export default class Tablero extends Component {
    render() {
        return (
            <div className="tablero col">
                { 
                    this.props.baraja
                    .map((carta, index) => {
                    const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
                    return <CardFlip
                        key={index} 
                        icono={carta.icono}
                        estaSiendoComparada={estaSiendoComparada}
                        seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                        fueAdivinada={carta.fueAdivinada}
                    />; 
                    })
                }
            </div>
        );
    }
}