
/*2. Crea dos variables numéricas y muestra en consola su suma, resta, multiplicación y división.*/


//Forma simple

const num1 = 20;
const num2 = 6;

console.log("Resultados de Operaciones sin Funciones: ");

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicacion:", num1 * num2);
console.log("Division:", num1 / num2);

console.log("\n");

//Utilizando Funciones

console.log("Resultados de Operaciones con Funciones: ");

function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

console.log("Suma:", suma(num1, num2));
console.log("Resta:", resta(num1, num2));
console.log("Multiplicacion:", multiplicacion(num1, num2));
console.log("Division:", division(num1, num2));
