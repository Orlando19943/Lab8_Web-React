import React, { Component} from 'react';
import Header from "../header/header";
import Tablero from "../Tablero/tablero";
import cardGenerator from '../utils/cardGenerator'



const getEstadoInicial = () =>{
    const baraja =cardGenerator();
    return {
        baraja
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
                <Header></Header>
                <Tablero
                baraja={this.state.baraja}
                /> 
            </div>
        );
    }
};
