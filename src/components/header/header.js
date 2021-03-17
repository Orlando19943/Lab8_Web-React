import React, { Component } from 'react';
import "./header.scss";

export default class Header extends Component {
    render (){
        return (
            <header>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid"> 
                <a class="navbar-brand">Juego de memoria</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02"> 
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li class="nav-item">
                        <a class="nav-link active animationShake" aria-current="page" >Reiniciar</a>
                    </li>            
                    <li class="nav-item">
                        <a class="nav-link active animationShake" id = "intentos" aria-current="page">Intentos: </a>
                    </li>  
                    </ul>            
                </div>
                </div>
            </nav>
            </header>
        );
    }
};
