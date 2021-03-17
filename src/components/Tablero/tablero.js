import React, { Component }from "react";
import CardFlip from "../card/card";
import './tablero.scss';
export default class Tablero extends Component {
    render() {
        return (
            <div className="tablero col">
                { 
                    this.props.baraja
                    .map ((carta) => <CardFlip icono = {carta.icono}/>)
                }
            </div>
        );
    }
}