// TAREA 1 PAG32
const userAge = prompt("Ingrese su userAge");

if (userAge < 16) {
    alert("Eres menor de edad. No puede ingresar al local");
} else if (userAge < 18) {
    alert("Ingreso permitido pero sin consumición de alcohol");
} else {
    alert("Mayor de edad. Puede ingresar al local");
}