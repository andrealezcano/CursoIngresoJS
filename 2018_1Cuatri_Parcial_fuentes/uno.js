
function mostrar()
{
    var largoIngresado ;

    var anchoIngresado ;

    var perimetro ;

    var largoParseado ;

    var anchoParseado ;

    largoIngresado = prompt("Ingrese el largo") ;

    anchoIngresado = prompt("Ingrese el ancho") ;

    largoParseado = parseInt(largoIngresado) ;

    anchoParseado = parseInt(anchoIngresado) ;

    perimetro = largoParseado * 2 + anchoParseado * 2 ;

    alert( perimetro) ;
}


