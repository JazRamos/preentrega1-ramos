let precioProducto;
let nombreProducto;
let cantidad;
let nombreCliente;
let total = 0; 
let opcion; 
let ticket = ``;


alert('Bienvenido al carrito de Compras del shop "Comprá lo que tengas ganas!"');
nombreCliente = prompt("Ingrese su nombre");
alert(`${nombreCliente} recuerde que si su compra supera los $2000 \n ¡Obtendrá un descuento del 50%!`);


do {
    nombreProducto = prompt("Ingrese nombre del producto que lleva");
    precioProducto = Number(prompt("Ingrese el precio del producto por unidad"));


    while (precioProducto < 200) { 
        precioProducto = Number(prompt('Precio es muy bajo! Ingrese uno más realista!'));
    }

    cantidad = parseInt(prompt("Ingrese cantidad de productos que desea comprar"));

    while (cantidad <= 0) { 
        cantidad = parseInt(prompt('Debe ingresar un (1) producto o más'));
    } 
    ticket = ticket + `Producto: ${nombreProducto} \n Precio unitario: $${precioProducto} \n Cantidad: ${cantidad} \n Total: $${cantidad * precioProducto} \n\n`
    total = total + cantidad * precioProducto;

    opcion = prompt("Desea comprar otro producto?"); 

} while (opcion == 'si');


if(total > 2000){
total = total - (total * 50 / 100)
alert("Su compra obtuvo el descuento!")
}

alert(`${ticket} El total de la compra realizada por ${nombreCliente} es de: $${total}`);
alert('Gracias por comprar en "Comprá lo que tengas ganas!"');