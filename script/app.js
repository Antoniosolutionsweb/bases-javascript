// funcion declarada

function estoEsUnaFuncion(){
    console.log("hola mundo")
}

estoEsUnaFuncion()


function queDevuleveValor(){
    return 19
}

//let valor=queDevuleveValor();

//console.log(valor)

function saludar(nombre= "Antonio" , edad= 27){
    console.log(`hola mi nombre es ${nombre} y mi edad es ${edad}`)
}

//saludar()

const funcionExpresada = ()=>{
    console.log("esta es una funcion expresada , que se le asigana a una variable")
}
//funcionExpresada()


/* **********     Curso JavaScript: 12. Objetos - #jonmircha     ********** */

    /* let a = new String("Hola");
    //console.log(a)

    const b = {}
    console.log(b);

    const c = new Object();
    console.log(c);
 */
    /* dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */
    /*     const jon = {
          nombre: "Jon",
          apellido: "MirCha",
          edad: 35,
          pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
          soltero: false,
          contacto: {
            email: "jonmircha@gmail.com",
            twitter: "@jonmircha",
            movil: "5215512345678"
          },
          saludar: function () {
            console.log(`Hola :)`)
          },
          decirMiNombre: function () {
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`)
          }
        }

        console.log(jon);
        console.log(jon["nombre"]);
        console.log(jon["apellido"]);
        console.log(jon.nombre);
        console.log(jon.apellido);
        console.log(jon.edad);
        console.log(jon.soltero);
        console.log(jon.pasatiempos);
        console.log(jon.pasatiempos[1]);
        console.log(jon.contacto);
        console.log(jon.contacto.twitter);
        jon.saludar();
        jon.decirMiNombre();

        console.log(Object.keys(jon));
        console.log(Object.values(jon));
        console.log(jon.hasOwnProperty("nombre"));
        console.log(jon.hasOwnProperty("nacimiento"));
     */





    /* **********     Curso JavaScript: 13. Tipos de Operadores - #jonmircha     ********** */

    /* Operadores */
    /* Aritméticos:  + - * / % ()  */

    /* let a = 5 + (5 - 10) * 3;
    let modulo = 5 % 2;

    console.log(a);
    console.log(modulo);
 */

    /*  Relacionales: >, <,   >=, <=, ==, ===, !=, !== */

    /* console.log(8 > 9);
    console.log(9 > 8);
    console.log(8 >= 9);
    console.log(9 >= 8);
    console.log(7 < 7);
    console.log(7 <= 7); */

    /*
    = 1 igual es asignación  de variable
    == 2 iguales es comparacion de valores
    === 3 igulaes es comparación de tipo de dato y de valor
    */

    /* console.log(7 == 7);
    console.log("7" == 7);
    console.log(0 == false);

    console.log(7 === 7);
    console.log("7" === 7);
    console.log(0 === false); */

    /* Incremento Decremento */
    /* let i = 2;

    console.log(i++);
    console.log(++i); */

    //i = i + 2;
    //i *= 3;

    //operador unario
    /* i++;
    i--;
    ++i;
    --i;
    console.log(i); */

    /*
    Lógicos
      ! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
      || - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
      && - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide */
    /*
    console.log(!true);
    console.log(!false);
    console.log((9 === 9) || ("9" === 9));
    console.log((9 === 9) && ("9" === 9));
    console.log((9 === 9) && ("9" === "9")); */

 let edad = 17

 if(edad < 17){
    //console.log('eres menor de edad')
 }
 else{
    //console.log('eres mayor de edad');
 }

 if(edad >= 17){
    //console.log('eres menor de edad')
 }
 else{
    //onsole.log('eres mayor de edad');
 }

 // rango de horas
 // de 0 a 5 dejame dormir
 // de 6 a 11 buenos dias 
 // de 12 a 18 buenas tardes
 //de 19 a 23 buenas noches 

 let hora = 5

 if(hora >= 0 && hora <=5){
    console.log("dejame dormir que es de madrugada")
 }
 else if( hora >= 6 && hora <=11){ 
    console.log("Buenos diass")
 }
 else if( hora >= 12 && hora <=18){
    console.log("Buenas tardes")
 }
 else{
    console.log("buenas noches")
 }

 console.log("operador ternario")

 let eresMayor= (edad>= 18) 
 ? "Si eres mayor de edad"
 : "erres menor de edad y no vas pal baile"
 console.log(eresMayor)

 /* switch - case */
    /*
    domingo -0
    lunes - 1
    martes - 2
    miércoles - 3
    jueves - 4
    viernes - 5
    sábado - 6
    */
    /* let dia = 2;

    switch (dia) {
      case 0:
        console.log("Domingo");
        break;
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miércoles");
        break;
      case 4:
        console.log("Jueves");
        break;
      case 5:
        console.log("Viernes");
        break;
      case 6:
        console.log("Sábado");
        break;
      default:
        console.log("El día no existe");
        break;
    }
 */

     /* **********     Curso JavaScript: 15. Ciclos (Loops) - #jonmircha     ********** */

    /*  let contador = 0;

     while (contador < 10) {
       console.log("while " + contador);
       contador++;
     }


     do {
       console.log("do while " + contador);
       contador++;
     } while (contador < 10); */

    /* for (inicialización de variable; condición; decremento o incremento) {
      sentencias que ejecuta el for
      sentencias que ejecuta el for
      sentencias que ejecuta el for
    } */

    /* for (let i = 0; i < 10; i++) {
      console.log("for " + i);
    }

    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }

    const jon = {
      nombre: "Jon",
      apellido: "MirCha",
      edad: 35
    }

    for (const propiedad in jon) {
      console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
    }

    for (const elemento of numeros) {
      console.log(elemento);
    }

    let cadena = "Hola Mundo";

    for (const caracter of cadena) {
      console.log(caracter);
    } */


      // try {
      //    let numero = "y"

      //    if(isNaN(numero)){
      //       throw new Error("El carracter ingresado no es un numero ")
      //    }
      //    console.log(numero * numero)
      // } catch (error) {
      //    console.log(`Se produjo el siguiente error ${error}`)
      // }

      /* **********     Curso JavaScript: 17. break & continue - #jonmircha     ********** */

    /* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let i = 0; i < numeros.length; i++) {
      if (i === 5) {
        break;
      }
      console.log(numeros[i]);
    }

    for (let i = 0; i < numeros.length; i++) {
      if (i === 5) {
        continue;
      }
      console.log(numeros[i]);
    } */
   /* **********     Curso JavaScript: 18. Destructuración - #jonmircha     ********** */
    /* const numeros = [1, 2, 3];

    //Sin destructuración
    let uno = numeros[0],
      dos = numeros[1],
      tres = numeros[2];

    console.log(uno, dos, tres);

    //Con destructuración
    const [one, two, three] = numeros;
    console.log(one, two, three);

    const persona = {
      nombre: "Jon",
      apellido: "MirCha",
      edad: 35
    };

    let { nombre, edad, apellido } = persona;
    console.log(nombre, apellido, edad); */