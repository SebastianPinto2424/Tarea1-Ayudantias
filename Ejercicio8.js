
/*8. Crea un array de números y usa reduce para obtener la suma total.*/

const arregloNumeros = [10, 5, 25, 30];
const sumaNumerosArreglo = arregloNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumaNumerosArreglo);