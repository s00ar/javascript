//TAREA 

const names = [
    "Juanito",
    "Pedro",
    "Santiago",
    "María",
    "José"
];

/* 
alert(nombre);
alert(nombreLargo); */

const charObject = {};


//OPCION 1 NO ME GUSTA DEL TODO
function countCharacters(names) {
    for (let index = 0; index < names.length; index++) { //ITERA EL ARRAY

        const nombre = names[index]; //GUARDA EN EL OBJETO EL PRIMER ELEMENTO DEL ARRAY COMO UNA PROPIEDAD

        const nombreLargo = names[index].length; //GUARDA EN EL OBJETO EL LENGHT DEL PRIMER ELEMENTO DEL ARRAY COMO EL VALOR DE LA PRIMERA PROPIEDAD

        // charObject.nombre = nombreLargo; AGREGA AL OBJETO EL PRIMER ELEMENTO DEL ARRAY COMO PROPIEDAD Y EL LENGHT DEL PRIMER ELEMENTO DEL ARRAY COMO VALOR DE LA PROPIEDAD PERO ESTO NO FUNCIONABA YA QUE SIEMPRE LE PONIA NOMBRE A LA PROPIEDAD Y NO EL VALOR DE LA VARIABLE NOMBRE
        charObject[nombre] = nombreLargo; // ESTO FUNCIONÓ PERFECTO Y DE AHÍ EN MAS ANDUVO TODO

        //alert(JSON.stringify(charObject)); ACÁ TENGO UN PROBLEMA YA QUE NO ME MUESTRA EL NOMBRE DE LA PROPIEDAD PERO SI SU VALOR

        // UNA VEZ SOLUCIONADO LO ANTERIOR ESTO NO FUE MAS NECESARIO PQ EL CONSOLE LOG ME MOSTRABA LOS VALORES BIEN
        if (index != (names.length)) { //PERO DE ESTA MANERA SI ME MUESTRA LOS VALORES DE LAS PROPIEDADES Y SU NOMBRE
            console.log(nombre + ": " +
                nombreLargo + ", ");
        } else {
            console.log(nombre + ": " +
                nombreLargo);
        }
    }

    console.log(charObject);
}
//OPCION 2 NO ME GUSTA DEL TODO
/* for (let index = 0; index < charObject.length; index++) {
    const nombre = charObject[index];


} */
countCharacters(names);
/*

function countCharacters(names) {
    for (let index = 0; index < names.length; index++) {
        const nombre = this.names[index];
        charObject.nombre = nombre.length;
    }
    console.log(charObject);

}


for (let index = 0; index < charObject.length; index++) {

    if (index != charObject.length) {
        alert(key + ": " +
            value + ", ");
    } else {
        alert(key + ": " +
            value);
    }
};

console.log(charObject);
*/

/* 

console.log(countCharacters(nombres));


Object.entries(charObject).forEach((key, value) => {
            if (key != ) console.log(key + ": " +
                value + ", "); 
                */








/*  ESTO FUNCIONA PERO NO ES LO QUE SE DEBE HACER
    
const names = ["Juanito", "Pedro", "María", "José"];

const nombre = names[0];

const nombreLargo = names[0].length;

const charObject = {
    nombre: nombreLargo,
    Fernando: 8,
    Pedro: 5
};

let valores = Object.values(charObject);
let varNombre = charObject[0];

for (let i = 0; i < charObject.length; i++) {
    console.log("El valor: " + varNombre + " tiene " + valores + " caracteres");
}

let count = 0
for (let properties in charObject) {
    count = count + 1
    console.log("El valor: " + varNombre + " tiene " + valores + " caracteres");
}
    
let count = 0
function countCharacters(names) {
    for (let properties in charObject) {
        count = count + 1
        console.log("El valor: " + varNombre + " tiene " + valores + " caracteres");
    }
}

countCharacters(names);
     */