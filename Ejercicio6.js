
/*6. Crea un array de objetos donde cada objeto tenga un nombre y una edad. Luego, muestra en consola el nombre de cada persona usando forEach.*/

const personas = [
    {nombre: "Sebastian", edad: 25},
    {nombre: "Esmeralda", edad: 27},
    {nombre: "Joseline", edad: 28},
];

personas.forEach(persona => {
    console.log(persona.nombre);
});



