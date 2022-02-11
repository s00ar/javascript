//Por el concepto de hoisting se puede usar la función en cualquier lugar del código
miFuncion(6, 4);

//Declaración de la función
function miFuncion(a, b) {
    console.log("Suma: " + (a + b));
}
//llamada a la función
miFuncion(2, 3);

function miFuncion2(a, b) {
    return a + b; // si no arreglamos return javascripto lo hace de manera implicita
}
let resultado = miFuncion2(32, 3);
console.log(resultado);

//Declaración de funciones anonimas o funciones de tipo expresión
let sumar = function(a, b) { return a + b };
let resultado2 = sumar(2, 2);
console.log(resultado2);

//Declarando Funciones de tio self invoking
(function(a, b) {

    console.log("Ejecutando la función, resultado : " + (a + b));
})(2, 3);

//Declaración de funciones flecha
let sumarNuevo = function(a, b) { return a + b };
let resultadoNuevo = sumarNuevo(2, 2);
console.log(resultadoNuevo);

const sumarFuncionTipoFlecha = (a, b) => a + b; //funcion de tipo flecha
resultadoNuevo = sumarFuncionTipoFlecha(3, 5);
console.log(resultadoNuevo);

//Funciones de suma usando ciclo for
let resultadoFinal = sumarTodo(5, 4, 13, 10);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) suma += arguments[i];
    return suma;
}

console.log(resultadoFinal);
//Paso por valor
let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);
console.log(x);
//console.log(a); //undefined

//Paso por referencia