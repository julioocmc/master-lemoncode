# Ejercicio 2 - Temas con Sass

## Descripción

Este ejercicio consiste en la creación de un sistema de temas utilizando Sass.

Se definen dos temas diferentes que permiten modificar la apariencia global de una interfaz de forma centralizada.

Cada tema afecta a las siguientes propiedades:

- Color principal
- Color secundario
- Tipografía principal y secundaria
- Border radius
- Box shadow
- Color de elementos de estado (warning)

Para cambiar el tema activo, solo es necesario modificar el import en el archivo principal:

@import "theme-a";
// @import "theme-b";

o viceversa.

Esto permite alternar entre temas sin modificar el resto del código.

# Estructura del proyecto

ejercicio-2/
│── index.html
│
├── css/
│ └── style.css
│
├── scss/
│ ├── style.scss
│ ├── \_theme-a.scss
│ └── \_theme-b.scss
