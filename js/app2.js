document.write("<h1>Menu de productos</h1>")
document.write("<button onclick={agregarProducto()}>Agregar productos</button>")
document.write("<br></br>")
document.write("<button onclick={filtrarProductos()}>Filtrar</button>")

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
    constructor(nombre, codigo, descripcion, precio, tipo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo;
    }
}

const productomat = new Producto("Mat de Yoga", 122345, "mat de yoga de 1.8m de goma espuma", 3200, "elemento")
const productocalza = new Producto("Calza para Yoga", 122332, "calza talle M", 4300, "ropa")
const productoladrillo = new Producto("Ladrillo de goma", 122558, "elemento ladrillo de goma", 1600, "elemento")
const productocamisa = new Producto("Camisa para Yoga", 122559, "camisa talle M", 3600, "ropa")

let arrayProducto = []

arrayProducto.push(productocalza)
arrayProducto.push(productocamisa)
arrayProducto.push(productoladrillo)
arrayProducto.push(productomat)

const carrito = []


const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((Producto) => {
        sumaTotal += Producto.precio
    })
    return sumaTotal
}



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



    agregarProducto()


