import _ from 'lodash';
import * as style from './style.css';
import * as stylus from './style.styl';

function component() {
    var element = document.createElement('h1');

    element.innerHTML = _.join(['Hello', 'there!', '—', 'General', 'Kenobi!'], ' ');
    element.classList.add(style.hello);
    element.classList.add(stylus.bla);

    return element;
}

document.body.appendChild(component());
