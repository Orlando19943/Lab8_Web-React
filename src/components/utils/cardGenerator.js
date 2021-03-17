import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses'
const numeroCartas = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];

    while (cartas.length < numeroCartas) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const carta = {
            icono: fontAwesomeClasses.splice(index, 1)[0],
            fueAdivinada: false
        };
        cartas.push(carta);
        cartas.push({ ...carta });
    }
    return shuffle(cartas);
}