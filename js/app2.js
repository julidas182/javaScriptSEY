let carrito = JSON.parse(localStorage.getItem('carrito')) || []


const cardcontainer = document.getElementById('cardcontainer')


arrayProducto.forEach((producto) => {
    const {nombre, codigo, descripcion, precio, tipo, img} = producto;
    const cardproducto = document.createElement("div");
    cardproducto.className = 'col-sm-4 mt-5'
    cardproducto.innerHTML = ` 
    <div class="card  bg-dark text-white" style="width: 18rem;">
        <img class="card-img-top" src="${img}"
            alt="${nombre}">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p class="card-text">${precio}</p>
            <button href="#" data-id = "${codigo}" class="botonDeCompra">AGREGAR A CARRITO</button>
        </div>
    </div>`;
    cardcontainer.append(cardproducto);
})

const cartContainer = document.querySelector('#cartContainer')
const botonCompra = document.querySelectorAll('.botonDeCompra')



const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const {nombre, codigo, descripcion, precio, tipo, img} = producto;
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${img}">
        </div>
        <div class="cartTitle"><span> ${nombre}</span></div>
        <div class="cartPrice"><span> $${precio}</span></div>
        <button data-id = "${codigo}" class="btn btn-primary botonEliminar" type="submit">X</button>
        `
        cartContainer.append(cartRow)
    })
} 

carrito.length > 0 && imprimirCarrito() //renderizo el carrito si existe algo dentro

const botonEliminar = document.querySelectorAll('.botonEliminar')
const botonVaciarCarrito = document.querySelector('#vaciarCarrito')
// console.log(botonEliminar);    

const carritoEliminado = () => {
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    imprimirCarrito()
}

botonVaciarCarrito.addEventListener('click', carritoEliminado)


const productoEliminado = (e) => {
    const prodEliminado = e.target.getAttribute('data-id')
    const prodAEliminar = carrito.find((producto) => producto.codigo == prodEliminado)
    const index = carrito.indexOf(prodAEliminar)
    carrito.splice(index, 1)
    // carrito.pop(prodAEliminar)
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    imprimirCarrito()
}



// const mostrarId = (e) => {
//     console.log(e.target.getAttribute('data-id'));
// }

botonEliminar.forEach((boton) => {
    boton.addEventListener('click', productoEliminado)
})



const productoAgregado = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const productoBuscado = arrayProducto.find((producto) => producto.codigo == productoElegido)
    carrito.push(productoBuscado)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

botonCompra.forEach((boton) => {
    boton.addEventListener('click', productoAgregado)
})






const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((Producto) => {
        sumaTotal += Producto.precio
    })
    return sumaTotal
}




