
// Se corrige el error al utilizar const en lugar de let para myName, ya que myName debe cambiar de valor.
let myName = 'Default';
myName = 'Chris';

// Se convierte myAge en un número para poder realizar operaciones aritméticas correctamente.
let myAge = 42;


const section = document.querySelector('section');

const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
// Se realiza la operación de suma correctamente, convirtiendo myAge a número y sumándole 20.
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
