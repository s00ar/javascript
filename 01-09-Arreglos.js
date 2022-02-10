//Arreglos
//let autos = nre Array("BMW", "MERCEDES", "VOLVO"); //Sintaxis en desuso
const autos = ["BMW", "MERCEDES BENZ", "VOLVO"];
console.log(autos);
console.log(autos[1]);
//Recorriendo nuestro arreglo
for (let i = 0; i < autos.length; i++) {
    console.log(i + ":" + autos[i]);
}
//modificar elementos del arreglo
autos[1] = "MERCEDEZBENZSINESPACIO";

for (let i = 0; i < autos.length; i++) {
    console.log(i + ":" + autos[i]);
}
//agregando valor al arreglo
autos.push("AUDI");
for (let i = 0; i < autos.length; i++) {
    console.log(i + ":" + autos[i]);
}
//agregando un valor al final del arreglo
console.log(autos.length);
autos[autos.length] = "CADILLAC";
console.log(autos); //Identificar arreglos
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);