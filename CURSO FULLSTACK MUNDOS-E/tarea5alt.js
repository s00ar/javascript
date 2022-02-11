//TAREA 2

let nombres = ["Juan", "Pedro", "María", "José"];

let largoNombres = "";

function countCharacters(nombres) {
    for (let index = 0; index < nombres.length; index++) {
        const element = array[index];
        countCharacters(element);

    }
    /* 
        nombres.forEach(element => {
            largoNombres += (element + " :" +
                element.length + ", "); */

    /* 
                            let total = 0;
                            for (let i = 0; i < nombres.length; i++) {
                                total += nombres[i].length; 

});
                }*/

    return largoNombres;
}
alert(countCharacters(nombres));
/* 
console.log(largoNombres); */
/* 
alert(countCharacters(nombres)); */