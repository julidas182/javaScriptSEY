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

carrito.length > 0 && imprimirCarrito() //renderizo el carrito si existe algo dentro



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


botonCarrito.addEventListener('click', imprimirCarrito)



const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((Producto) => {
        sumaTotal += Producto.precio
    })
    return sumaTotal
}




