function menu(){ 
    let opciones = prompt(`Bienvenido a Blanco and Co! Ingrese la opción que desea ver:
1. Colchones
2. Sommiers
3. Salir`);
    switch(opciones){
        case "1":
            Colchones()
        break;
        case "2":
            Sommiers()
        break;
        case "3":
            alert("Lo esperamos nuevamente!")
    }
}

let carrito = 0

function Colchones(){
    let opciones = prompt(`1. Espuma Alta Densidad
2. Resortes`)
    switch (opciones){
        case "1":
            let espuma = prompt(`1. Línea Dorada $30000
    2. Nimbus $40000`)
            if (espuma == "1"){
                carrito = 30000
                alert(`Su carrito tiene un valor de $ ${carrito}`)
            }
            else if (espuma == "2"){
                carrito = 40000
                alert(`Su carrito tiene un valor de $ ${carrito}`)
            }
            else{
                alert("Debe ingresar una opción posible")
            }
        break;
        case "2":
            let resortes = prompt(`1. Finesse $60000
    2. Brighton $90000`)
            if (resortes == "1"){
                carrito = 60000
                alert(`Su carrito tiene un valor de $ ${carrito}`)
            }
            else if (resortes == "2"){
                carrito = 90000
                alert(`Su carrito tiene un valor de $ ${carrito}`)
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
            carrito = 15000
            alert(`Su carrito tiene un valor de $ ${carrito}`)
        }
        else if (kingkoil == "2"){
            carrito = 20000
            alert(`Su carrito tiene un valor de $ ${carrito}`)
        }
        else{
            alert("Debe ingresar una opción posible")
        }
            break;
        case "2":
            let inducol = prompt(`1. Imperial $10000
    2. Inducol $12000`)
        if (inducol == "1"){
            carrito = 10000
            alert(`Su carrito tiene un valor de $ ${carrito}`)
        }
        else if (inducol == "2"){
            carrito = 12000
            alert(`Su carrito tiene un valor de $ ${carrito}`)
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


