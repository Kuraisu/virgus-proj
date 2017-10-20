import _ from 'lodash';
import * as style from './style.css';

function component() {
    var element = document.createElement('h1');

    element.innerHTML = _.join(['Hello', 'there!', '—', 'General', 'Kenobi!'], ' ');
    element.classList.add(style.hello);

    return element;
}

document.body.appendChild(component());
