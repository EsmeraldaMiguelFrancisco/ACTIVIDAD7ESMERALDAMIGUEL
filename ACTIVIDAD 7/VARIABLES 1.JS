// Declaramos una variable llamada myName.
let myName;

// Inicializamos la variable myName con un valor adecuado, en una línea separada.
myName = "Esmeralda"; 

// Declaramos una variable llamada myAge e inicializamos la variable con un valor, en la misma línea.
let myAge = 19; 


// Seleccionamos el elemento <section> del HTML.
const section = document.querySelector('section');

// Creamos un nuevo párrafo (<p>) y le asignamos el contenido de la variable myName.
const para1 = document.createElement('p');
para1.textContent = myName;

// Creamos otro nuevo párrafo (<p>) y le asignamos el contenido de la variable myAge.
const para2 = document.createElement('p');
para2.textContent = myAge;

// Añadimos los párrafos al elemento <section> para que aparezcan en la página.
section.appendChild(para1);
section.appendChild(para2);
