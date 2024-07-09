function estoEsUnaFuncion(){
    // console.log("hola mundo desde una funcion")
}

estoEsUnaFuncion()


const sumar = ()=>{
    // console.log( 2 +2)
}

sumar()


// funciones y metodos
const numero1 = 20
const numero2 = "20"
//console.log( parseInt(numero2)) // esto es una funcion 

//console.log(numero1.toString()) /// esto es un metodo

const datos = (nombre="juanito",apellido='')=>{
    //console.log(`hola mi nombre es ${nombre} y mi apellido es ${apellido}`)
}

datos()

const iniciandoApp = ()=>{
     console.log("iniciando la app")

     segundaFuncion()
}

const segundaFuncion = ()=>{
    //console.log("iniciando desde la segunda funcion")

    auth("Antonio")
}

const auth =(usuario)=>{
    //console.log(`se ha logueado correctamente ${usuario}`)
}



// funciones con objetos

const reproduccion =    {
    reproducir:id =>{
        console.log(`reproduciendo la cancion con el id ${id}`)
    },

    pausar: ()=>{
        console.log("cancion pausada")
    },
    borrar: function(id){
        console.log(`borrando la cancion con el id ${id}`)
    },
    playlist: (nombre)=>{
        console.log(`se esta reproduciendo la play list de ${nombre}`)
    }
}

reproduccion.reproducir(1);
reproduccion.pausar()
reproduccion.borrar(30)
reproduccion.playlist("Musica cristiana")

