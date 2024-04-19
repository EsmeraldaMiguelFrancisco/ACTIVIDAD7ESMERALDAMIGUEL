const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';


// Longitud de la cita
const quoteLength = quote.length;

// Posición del índice donde aparece substring en quote
const index = quote.indexOf(substring);

// Recortar la cita original
const revisedQuote = quote.slice(0, index) + 'No me gustan los huevos verdes y el jamón';

// Seleccionar el elemento 'section' del HTML
const section = document.querySelector('section');

// Crear nuevos párrafos
const para1 = document.createElement('p');
const para2 = document.createElement('p');

// Establecer el texto de los párrafos
para1.textContent = `The quote is ${quoteLength} characters long.`;
para2.textContent = revisedQuote;

// Añadir los párrafos al elemento 'section' del HTML
section.appendChild(para1);
section.appendChild(para2);
