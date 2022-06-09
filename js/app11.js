/* FUNCIONES */
const manejadorEnviar = (event)=>{
    event.preventDefault();
    const nombre = event.target[0].value
    const correo = event.target[1].value
    if (!nombre || !correo) {
        console.log('NO INGRESÓ ALGO');
        return;
    }
    if (nombre==='Luis') {
        console.log('vayase');
        return;
    }
    console.log('se ejecuta esto?');
    console.log(nombre);
    console.log(correo);
};



const form = document.querySelector('#formulario');
form.addEventListener('submit', manejadorEnviar);