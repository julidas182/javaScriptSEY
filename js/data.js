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