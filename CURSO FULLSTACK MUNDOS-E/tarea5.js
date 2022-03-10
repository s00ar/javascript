//TAREA 5
const names = [
    "Juanito",
    "Pedro",
    "Santiago",
    "María",
    "José"
];
const charObject = {};

function countCharacters(names) {
    for (let index = 0; index < names.length; index++) { //ITERA EL ARRAY

        const nombre = names[index]; //GUARDA EN EL OBJETO EL PRIMER ELEMENTO DEL ARRAY COMO UNA PROPIEDAD

        const nombreLargo = names[index].length; //GUARDA EN EL OBJETO EL LENGHT DEL PRIMER ELEMENTO DEL ARRAY COMO EL VALOR DE LA PRIMERA PROPIEDAD

        // charObject.nombre = nombreLargo; AGREGA AL OBJETO EL PRIMER ELEMENTO DEL ARRAY COMO PROPIEDAD Y EL LENGHT DEL PRIMER ELEMENTO DEL ARRAY COMO VALOR DE LA PROPIEDAD PERO ESTO NO FUNCIONABA YA QUE SIEMPRE LE PONIA NOMBRE A LA PROPIEDAD Y NO EL VALOR DE LA VARIABLE NOMBRE
        charObject[nombre] = nombreLargo; //AGREGA AL OBJETO EL PRIMER ELEMENTO DEL ARRAY COMO PROPIEDAD Y EL LENGHT DEL PRIMER ELEMENTO DEL ARRAY COMO VALOR DE LA PROPIEDAD
    }

    console.log(charObject);
    alert(JSON.stringify(charObject));

}
countCharacters(names);