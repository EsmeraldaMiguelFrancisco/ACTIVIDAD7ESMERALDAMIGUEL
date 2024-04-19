
// Se realiza el primer cálculo y se almacena en la variable result.
let result = 7 + 13 / 9 + 7;

// Se realiza el segundo cálculo y se almacena en la variable result2.
let result2 = 100 / 2 * 6;

// Se multiplica result y result2 y se asigna el resultado a result.
result *= result2;

// Se formatea result con 2 decimales y se almacena en finalResult.
const finalResult = result.toFixed(2);

// Se convierte finalResult en un número y se almacena en finalNumber.
const finalNumber = parseFloat(finalResult);


const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);
