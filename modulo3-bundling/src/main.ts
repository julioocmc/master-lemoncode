import styles from './style.module.css';

console.log('Valor de entorno:', import.meta.env.VITE_API_MESSAGE);

const h1 = document.createElement('h1');
h1.textContent = 'Hola desde Vite + TypeScript :)';
h1.classList.add(styles.title);

document.querySelector<HTMLDivElement>('#app')!.appendChild(h1);
