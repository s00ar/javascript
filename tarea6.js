//TAREA 6 Crea una función llamada "filterProducts" que reciba por parámetro un array de objetos y una propiedad y devuelva un arreglo con los valores de esa propiedad.
const products = [
    { producto: "galletitas", valor: 50, hayStock: true },
    { producto: "caramelos", valor: 10, hayStock: true },
    { producto: "coca cola", valor: 25, hayStock: false },
]

let arrayFiltered = [];

function filterProducts(array, property) {
    for (let i = 0; i < array.length; i++) {
        arrayFiltered.push(array[i][property]);
    }
    return arrayFiltered;
}

//filterProducts(products, "valor");
filterProducts(products, "producto");
console.log(arrayFiltered);

//ACA ENTENDÍ MAL LA CONSIGNA PQ SOY MEDIO EZPECIAL ASÍ QUE MI PROGRAMA ME BUSCABA UNO SOLO DE LOS ELEMENTOS
/* let userInput = prompt("Ingrese el nombre del producto que desea buscar");

function filterProducts(products, userInput) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].producto == userInput) {
            alert(`El valor de la ${userInput} es: ${products[i].valor}`);
        }
        /*  else {
                    alert("No se encontró el producto " + userInput);
                    chota
                } 
}
}

//OTRA QUE NO ERA xD
let userInput = "galletitas";
const arrayDeValores = [];

function filterProducts(products, userInput) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].producto == userInput) {
            console.log("encontré" + products[index].producto);
            //const resultado = products[i].userInput;
            //arrayDeValores.push(resultado);
        } else if (products[index].valor == userInput) {

            console.log("encontré" + products[index].valor);
            //const resultado = products[i].userInput;
            //arrayDeValores.push(resultado);
        } else if (products[index].hayStock == userInput) {

            console.log("encontré" + products[index].valor);
            //const resultado = products[i].userInput;
            //arrayDeValores.push(resultado);
        } else {
            console.log("No se encontró el valor");
        }
    };
}

filterProducts(products, userInput);

*/