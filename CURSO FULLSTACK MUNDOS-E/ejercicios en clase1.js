const nombre = "Santiago";
let edad = 38;
let viveEnAmerica = true;

console.log(nombre, edad, viveEnAmerica);
let a = 1 // tipo number
let b = "1" // tipo string  (string)
let c = true // tipo boolean    (boolean) Todos los valores son true menos el 0, el false,null,undefined,NaN
let d = null // tipo object
let e = undefined // tipo undefined
let f = { // tipo object
    nombre: "Santiago",
    edad: 38,
    viveEnAmerica: true
}
console.log(a === b); // true
console.log(a == b); // false

//OPERADORES LÓGICOS11
// ||(OR) compara si una de las expresiones es verdadera de lo contrario compara la otra de izquierda a derecha. Para cada operando convierte el valor a booleano si el resultado es true se detiene la ejecución del código. Cuando solo ponemos valores devuelve el valor verdadero. Si todos los valores son false devuelve el último valor falso.

// && (AND) compara si todas las expresiones son verdaderas de lo contrario devuelve el valor falso. Para cada operando convierte el valor a booleano si el resultado es false se detiene la ejecución del código. Cuando solo ponemos valores devuelve el valor falso. Si todos los valores son true devuelve el último valor verdadero.

// /!(NOT) Da el valor boleano contrario.

let nota = 5;
let nota2 = 10;
//operador ternario
let resultado = nota > 6 ? "Aprobado" : "Reprobado";
if (nota >= 5 && nota < 6) {
    console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
    console.log("Insuficiente");
}
//

leti = 0
while (i < 10) {
    i++;
    console.log(i);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
//push agrega un elemento al final del arreglo
numeros.push(11);
//pop elimina el último elemento del arreglo
numeros.pop();