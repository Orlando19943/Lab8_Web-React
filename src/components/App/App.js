import React, { Component} from 'react';
import Header from "../header/header";
import Tablero from "../Tablero/tablero";
import cardGenerator from '../utils/cardGenerator'



const getEstadoInicial = () =>{
    const baraja =cardGenerator();
    return {
        baraja,
        parejaSeleccionada: [],
        estaComparando: false,
        numeroDeIntentos: 0
    };
}
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = getEstadoInicial();
    }
    render (){
        return (
            <div className="App">
                <Header
                    numeroDeIntentos = {this.state.numeroDeIntentos}
                    resetearPartida = {() => this.resetearPartida()}
                ></Header>
                <Tablero
                baraja={this.state.baraja}
                parejaSeleccionada = {this.state.parejaSeleccionada}
                seleccionarCarta = {(carta) => this.seleccionarCarta(carta)}
                /> 
            </div>
        );
    }
    
    seleccionarCarta(carta){
        if (this.state.estaComparando || this.state.parejaSeleccionada.indexOf(carta) > -1 || carta.fueAdivinada){
            return;
        }

        const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
        this.setState({parejaSeleccionada});
        if(parejaSeleccionada.length === 2){
            this.compararPareja(parejaSeleccionada);
        }
    }
    compararPareja(parejaSeleccionada) {
        this.setState({estaComparando: true});
    
        setTimeout(() => {
        const [primeraCarta, segundaCarta] = parejaSeleccionada;
        let baraja = this.state.baraja;
    
        if (primeraCarta.icono === segundaCarta.icono) {
            baraja = baraja.map((carta) => {
            if (carta.icono !== primeraCarta.icono) {
                return carta;
            }
    
            return {...carta, fueAdivinada: true};
            });
        }
        this.verificarSiHayGanador(baraja);
        this.setState({
            parejaSeleccionada: [],
            baraja,
            estaComparando: false,
            numeroDeIntentos: this.state.numeroDeIntentos + 1 
        })
        }, 1000)
    }

    verificarSiHayGanador(baraja) {
        if(
            baraja.filter((carta) => !carta.fueAdivinada).length === 0
        )
        {
            alert(`Has ganado en ${this.state.numeroDeIntentos} intentos`);
        }
    }

    resetearPartida (){
        this.setState(
            getEstadoInicial()
        );
    }

};
