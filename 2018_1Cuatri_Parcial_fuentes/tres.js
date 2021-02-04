function mostrar()
{

    var precio ;
    
    var porcentajeDescuento ;

    var precioFinal ;

    var precioParseado ;

    var porcentajeParseado ;

    precio = prompt("Ingrese el precio") ;

    porcentajeDescuento = prompt("Ingrese el descuento") ;

    precioParseado = parseInt(precio) ;

    porcentajeParseado = parseInt(porcentajeParseado) ;

    porcentajeDescuento = porcentajeDescuento/100 ;


    precioFinal = precio * (porcentajeDescuento) ;

     elPrecioFinal.value =  precioFinal ;

}
