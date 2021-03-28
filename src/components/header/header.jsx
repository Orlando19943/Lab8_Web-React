import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const item = this.props;
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">Juego de memoria</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                <li className="nav-item">
                  <a href="/#" className="nav-link active animationShake reinicio" aria-current="page" onClick={item.resetearPartida} onKeyPress={this.handleKeyUp} tabIndex="-1">Reiniciar</a>
                </li>
                <li className="nav-item">
                  <a href="/#" role="button" className="nav-link active animationShake" id="intentos" aria-current="page">
                    Intentos:
                    {item.numeroDeIntentos}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  numeroDeIntentos: PropTypes.number.isRequired,
  resetearPartida: PropTypes.func.isRequired,
};
