


// 1) Programa una función que cuente el número de caracteres
//  de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.

const contadorCaracteres =()=>{

    let dato= "hola mundo"

    console.log(dato.length)
}

contadorCaracteres()

// 2) Programa una función que te devuelva el texto recortado
//  según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".





// 3) Programa una función que dada una String te devuelva un Array 
// de textos separados por cierto caracter,
//  pe. miFuncion('hola que tal', ' ') 
// devolverá ['hola', 'que', 'tal'].

const arrayCaracteres =()=>{

    let dato = "hola que tal"

    let divisiones = dato.split(" ", 3);

    console.log(divisiones)
    


   
}

arrayCaracteres()


/* 4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo */


const repetirCaracteres =()=>{

    let dato = "hola mundo"

    console.log(dato.repeat(3))

   


   
}

repetirCaracteres()
