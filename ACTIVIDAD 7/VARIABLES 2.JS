// Se declara la variable myName y se le asigna el valor 'Esmeralda'.
let myName = 'Esmeralda';

// Seleccionamos el elemento <section> del HTML.
const section = document.querySelector('section');

// Creamos un nuevo párrafo (<p>) y le asignamos el contenido de la variable myName.
const para = document.createElement('p');
para.textContent = myName;

// Añadimos el párrafo al elemento <section> para que aparezca en la página.
section.appendChild(para);
