var persona = {
    nombre: 'Jhon',
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

persona.saludar();
console.log(persona.edad)
console.log(persona.nombre)

var Jugador = {
    fuerza: 1,
    incrementarFuerza: function() {
        this.fuerza += 1;
    },
    consultarFuerza: function() {
        console.log("La fuerza actual es de " + this.fuerza)
    }
}

Jugador.consultarFuerza();
Jugador.incrementarFuerza();
Jugador.consultarFuerza();

var date = new Date();

console.log(date);

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

console.log(year);

console.log("Hoy es el día " + day + " del mes " + month + " del año " + year);


function nroAlea(numeroMaximo) {
    return Math.round(Math.random() * numeroMaximo);
}

console.log(nroAlea(100));

var colores = ["verde", "azul", "rojo"];
console.log(colores[0]);

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var total = 0;
for (var i = 0; i < numeros.length; i += 1) {
    if (i % 2 == 0) {
        console.log(i);
    }

    total += numeros[i];
}

alert("el total es: " + total);


function calculoimc() {
    var resultado;
    var estatura = new Number();
    var peso = new Number();
    var resp = new String();
    var salir = new Boolean();
    do {
        salir = false;
        document.write("=========================================================================", '<BR/>');
        document.write("Bienvenido al sistema automatizado y revolucionario de medici�n de Indice de Masa Corporal de forrocorp", '<BR/>');
        document.write("", '<BR/>');
        document.write("=========================================================================", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write(">>>Presiona cualquier tecla para continuar...<<<", '<BR/>');
        prompt();
        document.body.innerHTML = '';
        do {
            document.body.innerHTML = '';
            document.write("******************************************************", '<BR/>');
            document.write("* Ingrese su estatura en metros separados por punto: *", '<BR/>');
            document.write("******************************************************", '<BR/>');
            estatura = Number(prompt());
            if (estatura < 0) {
                document.write("dato erroneo", '<BR/>');
                estatura = 0;
            } else {
                document.write("dato aceptado", '<BR/>');
            }
        } while (estatura <= 0);
        do {
            document.body.innerHTML = '';
            document.write("***********************************", '<BR/>');
            document.write("*     Ingrese su peso en kg:      *", '<BR/>');
            document.write("***********************************", '<BR/>');
            peso = Number(prompt());
            if (peso < 0) {
                document.write("dato erroneo", '<BR/>');
                peso = 0;
            } else {
                document.write("dato aceptado", '<BR/>');
            }
        } while (peso <= 0);
        // CALCULO Y DEVOLUCI�N A USUARIO
        document.body.innerHTML = '';
        resultado = peso / (estatura * estatura);
        if (resultado > 24.9) {
            document.write("***********************************", '<BR/>');
            document.write("*         Tienes sobrepeso        *", '<BR/>');
            document.write("***********************************", '<BR/>');
        }
        if (resultado < 24.9 && resultado > 18.4) {
            document.write("***********************************", '<BR/>');
            document.write("*      Estas en tu peso ideal     *", '<BR/>');
            document.write("***********************************", '<BR/>');
        }
        if (resultado < 18.4) {
            document.write("***********************************", '<BR/>');
            document.write("*Estas por debajo de tu peso ideal*", '<BR/>');
            document.write("***********************************", '<BR/>');
        }
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write(">>>Presiona cualquier tecla para continuar...<<<", '<BR/>');
        prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
        document.body.innerHTML = '';
        document.write("***********************************", '<BR/>');
        document.write("      Tu IMC es:", resultado, '<BR/>');
        document.write("***********************************", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write(">>>Presiona cualquier tecla para continuar...<<<", '<BR/>');
        prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
        document.body.innerHTML = '';
        // SALIDA CONDICIONAL DEL PROGRAMA
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("", '<BR/>');
        document.write("***********************************", '<BR/>');
        document.write("*      Deseas salir [S][N]?       *", '<BR/>');
        document.write("***********************************", '<BR/>');
        resp = prompt();
        if (resp == "S" || resp == "s") {
            salir = true;
        } else {
            salir = false;
        }
    } while (salir != true);
}