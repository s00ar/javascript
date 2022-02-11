/*Ejemplos de tipos de datos
En JavaScript*/
//String
var nombre = "Carlos";
console.log(nombre);
//Numerico
var numero = 1000;
console.log(numero);
//object
var objeto = {
    nombre: "Jun",
    apellido: "Meyong",
    telefono: "1166837583"
}
console.log(objeto);
//boolean
var bandera = false;
console.log(bandera);
console.log(typeof bandera);
//function
function miFuncion() {};
console.log(miFuncion);
//simbolo
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
//clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Undefinded
var x;
console.log(x);
//null ausencia de datos
var y = null;
console.log(y);