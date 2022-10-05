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

const productos = [];

const prod1 = new Producto(1, "Linea Dorada", 30000, 1);
const prod2 = new Producto(2, "Nimbus", 40000, 1);
const prod3 = new Producto(3, "Finesse", 60000, 1);
const prod4 = new Producto(4, "Brighton", 90000, 1);
const prod5 = new Producto(5, "Confort Sensations", 15000, 2);
const prod6 = new Producto(6, "World Luxury Tejido de Punto", 20000, 2);
const prod7 = new Producto(7, "Imperial", 10000, 2);
const prod8 = new Producto(8, "Inducol", 12000, 2);

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8);

const productosCarrito = [];


function mostrarProductos(productos){
    const contenedor = document.getElementById("container");
    console.log(contenedor);
    productos.forEach(producto => {
        const card = document.createElement('card');
        card.innerHTML += 
                        `<div class="card" style="">
                            <h5 class="card-title"> ${producto.nombre}</h5>
                            <p class="card-text"> Precio: ${producto.precio}</p>
                            <button class="" id="button${producto.id}"> Agregar al carrito </button>
                        </div>`
        contenedor.appendChild(card);
        
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
    };

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

mostrarProductos(productos);