export default class CL_IProducto{
    leerCodigo(){
        return prompt("ingrese el codigo del producto");
    }
    leerCosto(){
        return prompt("ingrese el costo del producto");
    }
    leerTipo(){
        return prompt("ingrese el tipo del producto");
    }

    reporteProducto(c,p,d,pf){
        return  `
        <br> Codigo: ${c}
        <br> Precio base de venta:$ ${p}
        <br> Descuento:$ ${d}
        <br> Precio final:$ ${pf}
        `
    }
}