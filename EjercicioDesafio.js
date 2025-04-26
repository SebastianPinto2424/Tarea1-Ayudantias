/*DESAFÍO:

Tienes una lista de pedidos. Cada pedido es un objeto con un `id`, un `producto`, y una propiedad `entregado` que puede ser `true` o `false`.

1. Crea una función asincrónica que:
- Espere 1 segundo por cada pedido usando `setTimeout` dentro de una promesa.
- Si el pedido está entregado, resuelva la promesa con un mensaje indicando que ya se entregó.
- Si no, la rechace con un mensaje indicando que el pedido está pendiente.
1. Usa `async/await` y `try/catch` para recorrer todos los pedidos y mostrar el resultado de cada uno.*/

const pedidos = [
    {id: 1, producto: "Completos", entregado: true},
    {id: 4, producto: "Pizza", entregado: false},
    {id: 6, producto: "Papas fritas", entregado: true},
    {id: 56, producto: "Palomitas", entregado: false},
    {id: 52, producto: "Bebida", entregado: true},
    {id: 2, producto: "Helado", entregado: false}
];

function gestionPedido(pedido){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(pedido.entregado){
                resolve(`El pedido ${pedido.producto} ya fue entregado.`);
            }else{
                reject(`El pedido ${pedido.producto} esta pendiente aun.`);
            }
        }, 1000);
    })
}

async function recorrePedidos(){
    for(const pedido of pedidos){
        try{
            const resultado = await gestionPedido(pedido);
            console.log(resultado);
        }catch (error){
            console.error(error);
        }
    }
}

recorrePedidos();