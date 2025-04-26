
/*9. Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa `await` para esperar su resultado e imprimirlo.*/

function funcionEsperar(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Accion realizada despues de 2 segundos");
        }, 2000);
    })
}

async function realizar(){
    const mensaje = await funcionEsperar();
    console.log(mensaje);
}

realizar();

