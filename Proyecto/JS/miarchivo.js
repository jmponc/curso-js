let productos = []
let carrito = []

function menu(){ 
    let opciones = "1";
    while (opciones !== "3") {
        opciones = prompt(`Bienvenido a Blanco and Co! Ingrese la opción que desea ver:
        1. Colchones
        2. Sommiers
        3. Mostrar carrito
        4. Salir`);
        switch(opciones){
            case "1":
                Colchones()
                break;
            case "2":
                Sommiers()
                break;
            case "3":
                alert(`Su carrito contiene los siguientes items: ${carrito}
                y en total suman $ ${valorCarrito}`);
                break;
            case "4":
                alert("Lo esperamos nuevamente!")
                break;
            default:
                alert("Opcion incorrecta");
        }
    }
}

let valorCarrito = 0;

function Colchones(){
    let opciones = prompt(`1. Espuma Alta Densidad
2. Resortes`)
    switch (opciones){
        case "1":
            let espuma = prompt(`1. Línea Dorada $30000
    2. Nimbus $40000`)
            if (espuma == "1"){
                carrito.push(lineaDorada.nombre);
                valorCarrito += 30000
                alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
            }
            else if (espuma == "2"){
                carrito.push(nimbus.nombre);
                valorCarrito += 40000
                alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
            }
            else{
                alert("Debe ingresar una opción posible")
            }
        break;
        case "2":
            let resortes = prompt(`1. Finesse $60000
    2. Brighton $90000`)
            if (resortes == "1"){
                carrito.push(finesse.nombre);
                valorCarrito += 60000
                alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
            }
            else if (resortes == "2"){
                carrito.push(brighton.nombre);
                valorCarrito += 90000
                alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
            }
            else{
                alert("Debe ingresar una opción posible")
            }
        break;
        default:
            alert("Ingrese una opcion correcta")
        break;
    }
}

function Sommiers(){
    let opciones = prompt(`1. King Koil
2. Inducol`)
    switch (opciones){
        case "1":
            let kingkoil = prompt(`1. Confort Sensations $15000
    2. World Luxury Tejido de Punto $20000`)
        if (kingkoil == "1"){
            carrito.push(confortSens.nombre);
            valorCarrito += 15000
            alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
        }
        else if (kingkoil == "2"){
            carrito.push(tejidoPunto.nombre);
            valorCarrito += 20000
            alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
        }
        else{
            alert("Debe ingresar una opción posible")
        }
            break;
        case "2":
            let inducol = prompt(`1. Imperial $10000
    2. Inducol $12000`)
        if (inducol == "1"){
            carrito.push(imperial.nombre);
            valorCarrito += 10000
            alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
        }
        else if (inducol == "2"){
            carrito.push(inducol.nombre);
            valorCarrito += 12000
            alert(`Su carrito tiene un valor de $ ${valorCarrito}`)
        }
        else{
            alert("Debe ingresar una opción posible")
        }
        break;
        default:
            alert("Ingrese una opcion correcta")
        break;
    }
}
 
menu();


class Producto{
    constructor(id,nombre,precio,tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }
}

const lineaDorada = new Producto(1, "Linea Dorada", 30000, 1);
const nimbus = new Producto(2, "Nimbus", 40000, 1);
const finesse = new Producto(3, "Finesse", 60000, 1);
const brighton = new Producto(4, "Brighton", 90000, 1);
const confortSens = new Producto(5, "Confort Sensations", 15000, 2);
const tejidoPunto = new Producto(6, "World Luxury Tejido de Punto", 20000, 2);
const imperial = new Producto(7, "Imperial", 10000, 2);
const inducol = new Producto(8, "Inducol", 12000, 2);