
const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio : 300},
    {nombre: 'laptop', precio : 700},
    {nombre: 'tv de 60 pulgadas', precio : 350},
    {nombre: 'teatro en casa', precio : 50},
]

// metodo .some
const existe = carrito.some( producto => producto.nombre ==='perro')
console.log(existe)