// document.write("<h1>Menu de productos</h1>")
// document.write("<button onclick={agregarProducto()}>Agregar productos</button>")
// document.write("<br></br>")
// document.write("<button onclick={filtrarProductos()}>Filtrar</button>")

// let puntaje = "69"


// if (puntaje >= 70) {
//     console.log("buen puntaje, sigue mejorando");
// } else if (puntaje >= 40) {
//     console.log("te falta practicar mas");
// }
// else {
//     console.log("sos horrible!!")
// }




// generador de nombres de usuario
/*
for (let i = 1; i <= 200; i++) {

    let ingresoNombre = prompt("Ingrese su Nombre")
    alert("su nombre de usuario es " + ingresoNombre + i);

}


let nombreUsuario = prompt("ingrese nombre de usuario")

while(nombreUsuario != "juliandasc"){
    alert("el usuario " + nombreUsuario + " es incorrecto" )
    nombreUsuario = prompt("ingrese nombre de usuario correcto")
}
*/


//ENTREGABLE OBLIGATORIO 1

class Producto {
    constructor(nombre, codigo, descripcion, precio, tipo, img) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo;
        this.img = img;
    }
}

const productomat = new Producto("Mat de Yoga", 122345, "mat de yoga de 1.8m de goma espuma", 3200, "elemento", "/imagenes-productos/elemento3-min.jpg")
const productocalza = new Producto("Calza para Yoga", 122332, "calza talle M", 4300, "ropa", "/imagenes-productos/inducalza-min.jpg" )
const productoladrillo = new Producto("Ladrillo de goma", 122558, "elemento ladrillo de goma", 1600, "elemento", "/imagenes-productos/elemento2-min.jpg")
const productocamisa = new Producto("Conjunto remera y calza", 122559, "remera y calza talle M", 3600, "ropa", "/imagenes-productos/induconjunto-min.jpg")

const arrayProducto = [productocalza, productocamisa, productoladrillo, productomat]


let carrito = JSON.parse(localStorage.getItem('carrito')) || []


const cardcontainer = document.getElementById('cardcontainer')


arrayProducto.forEach((producto) => {
    const cardproducto = document.createElement("div");
    cardproducto.className = 'col-sm-4 mt-5'
    cardproducto.innerHTML = ` 
    <div class="card  bg-dark text-white" style="width: 18rem;">
        <img class="card-img-top" src="${producto.img}"
            alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">${producto.precio}</p>
            <button href="#" data-id = "${producto.codigo}" class="botonDeCompra">AGREGAR A CARRITO</button>
        </div>
    </div>`;
    cardcontainer.append(cardproducto);
})

const cartContainer = document.querySelector('#cartContainer')
const botonCompra = document.querySelectorAll('.botonDeCompra')
const botonCarrito = document.querySelector('#botonCarrito')


const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.img}">
        </div>
        <div class="cartTitle"><span> ${producto.nombre}</span></div>
        <div class="cartPrice"><span> $${producto.precio}</span></div>
        `
        cartContainer.append(cartRow)
    })
} 




const productoAgregado = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    // console.log(productoElegido);
    const productoBuscado = arrayProducto.find((producto) => producto.codigo == productoElegido)
    carrito.push(productoBuscado)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

botonCompra.forEach((boton) => {
    boton.addEventListener('click', productoAgregado)
})


botonCarrito.addEventListener('click', imprimirCarrito)



const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((Producto) => {
        sumaTotal += Producto.precio
    })
    return sumaTotal
}


// probando pushbar

var pushbar = new Pushbar({
    blur:true,
    overlay:true,
})

/*
const filtrarProductos = () => {
    let tipo = prompt("Que tipo de productos desea ver?")

    switch (tipo) {
        case "elemento":
            alert("usted eligio los productos del tipo " + tipo)

              arrayProducto.forEach(element => {
                
                if (element.tipo == tipo) {
                    console.log("se agrego al carrito el producto " + element.nombre + " cuyo valor es: " + element.precio)
                    carrito.push(element)
                }
            }); break

        
        case "ropa":
            alert("usted eligio los productos del tipo " + tipo)
            arrayProducto.forEach(element => {
              
                if (element.tipo == tipo) {
                    console.log("se agrego al carrito el producto " + element.nombre + " cuyo valor es: " + element.precio)
                    carrito.push(element)
                }
            }); break
        default:
            console.log('Por favor, ingrese un tipo valido')
            break

    }

    const confirmarCompra = confirm("¿queres agregar mas productos al carrito?")

    if (confirmarCompra) {
        alert("Eliga si agregar un producto individual o quiere agregar otro conjunto de tipo de productos")
    } else {
        console.log("Finalizo la compra, el total es de $ " + totalCarrito())
        console.log(carrito)

    }
}



filtrarProductos()

*/
