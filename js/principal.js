/* analisis de datos 
* un producto codigo tipo (1: dama, 2: caballero, 3: niño)
* precioBaseVenta resulta de incrementar un 30% del costo 
* descuento del 10% si es para niño 
* reporte codigo, precio base de venta, descuento, precio final*/

import CL_Producto from "./CL_Producto.js";
import CL_IProducto from "./CL_IProducto.js";

let iprod = new CL_IProducto(),
    c = iprod.leerCodigo(),
    ct = iprod.leerCosto(),
    t = iprod.leerTipo(),
    prod = new CL_Producto(c,ct,t),
    salida = document.getElementById("salida");

salida.innerHTML = iprod.reporteProducto(prod.codigo,prod.precioBaseVenta(),prod.descuento(),prod.precioFinal());