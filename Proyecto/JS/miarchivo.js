class Producto{
    constructor(id,nombre,precio,tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }
    mostrarProducto() {
        return this.nombre + " " + "$" + this.precio;
    }
}

const productosCarrito = [];

const lista = document.querySelector("#listado")

function mostrarProductos(){
    const contenedor = document.getElementById("listado");
    console.log(contenedor);
    fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement("li")
            li.innerHTML = `
            <div class="card" style="">
                <h5 class="card-title"> ${producto.nombre}</h5>
                <p class="card-text"> Precio: ${producto.precio}</p>
                <button class="" id="button${producto.id}"> Agregar al carrito </button>
            </div>` 
        
        lista.append(li)
        

        const button = document.getElementById(`button${producto.id}`);
        button.addEventListener('click', () =>{
            productosCarrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(productosCarrito));
            const carrito = JSON.parse(localStorage.getItem("carrito"));
            Swal.fire({
                title: `${producto.nombre} se ha agregado al carrito!`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            const div = document.createElement('div');
            div.innerHTML += `<div class="carrito">
                                    <h5> Su carrito contiene: </h5>
                                    <p>${producto.nombre}: $${producto.precio} </p>
                                 </div>`
            contenedor.appendChild(div);
            })
        })    
    })
}

class Carrito{

}

class DetalleCarrito{
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
        }
        mostrarDetalle() {
            return this.cantidad + "x " + this.producto.nombre + " ($" + this.calcularMontoDetalle() + ")";
        }
        calcularMontoDetalle(){
            return this.cantidad * this.producto.precio;
        }
}

mostrarProductos();