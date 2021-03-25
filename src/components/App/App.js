/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-alert */
import React, { Component } from "react";
import Header from "../header/header";
import Tablero from "../Tablero/tablero";
import cardGenerator from "../utils/cardGenerator";

const getEstadoInicial = () => {
  const baraja = cardGenerator();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
  };
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  seleccionarCarta(carta) {
    const item = this.state;
    if (
      item.estaComparando
      || item.parejaSeleccionada.indexOf(carta) > -1
      || carta.fueAdivinada) {
      return;
    }
    const parejaSeleccionada = [...item.parejaSeleccionada, carta];
    this.setState({ parejaSeleccionada });
    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({ estaComparando: true });
    setTimeout(() => {
      const item = this.state;
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let { baraja } = item;
      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }
          return { ...carta, fueAdivinada: true };
        });
      }
      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: item.numeroDeIntentos + 1,
      });
    }, 1000);
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) {
      // eslint-disable-next-line react/destructuring-assignment
      alert(`Has ganado en ${this.state.numeroDeIntentos} intentos`);
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial(),
    );
  }

  render() {
    const item = this.state;
    return (
      <div className="App">
        <Header
          numeroDeIntentos={item.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
        />
        <Tablero
          baraja={item.baraja}
          parejaSeleccionada={item.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }
}
