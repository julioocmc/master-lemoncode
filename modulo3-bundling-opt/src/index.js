import './styles.scss';
import logo from './assets/logo.png';

const container = document.getElementById('app');

const img = document.createElement('img');
img.src = logo;
img.width = 150;
container.appendChild(img);

const h1 = document.createElement('h1');
h1.textContent = 'Hola mundo';
container.appendChild(h1);
