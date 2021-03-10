var telefono = new Object();

$(document).ready(function() {
    /*setMarca();
    setModelo();
    console.log("Getters:")
    console.log(getMarca());
    console.log(getModelo());*/


    //setValores();

    //logicos();

    //ciclos();

    practicaCiclos();
});

function setModelo() {
    telefono.modelo = 'P40';
}

function setMarca() {
    telefono.marca = 'Huawei';
}

function getModelo() {
    return telefono.modelo;
}

function getMarca() {
    return telefono.marca;
}

var x;
var y;
var rSuma;
var rResta;
var rMult;
var rDiv;

function setValores() {
    x = prompt("Valor del primer número: ");
    y = prompt("Valor del segundo número: ");
    suma(x, y);
    resta(x, y);
    multiplicacion(x, y);
    division(x, y);
    console.log(x + " + " + y + " = " + rSuma);
    console.log(x + " - " + y + " = " + rResta);
    console.log(x + " * " + y + " = " + rMult);
    console.log(x + " / " + y + " = " + rDiv);
}

function suma(n1, n2) {
    rSuma = Number(n1) + Number(n2);
    return rSuma;
}

function resta(n1, n2) {
    rResta = Number(n1) - Number(n2);
    return rResta;
}

function multiplicacion(n1, n2) {
    rMult = Number(n1) * Number(n2);
    return rMult;
}

function division(n1, n2) {
    rDiv = Number(n1) / Number(n2);
    return rDiv;
}

function logicos() {
    var f = 1;
    var e = 2;

    if (f == 1 && e != 3) {
        console.log("Shi");
    } else {
        console.log("Ño");
    }
}

function ciclos() {
    var arreglo = ['Pedro', 'Luis', 'Valeria', 'Andreina', 'Avril'];
    for (var i = 0; i < arreglo.length; i++) {
        console.log((i + 1) + ". " + arreglo[i]);
    }
}

function practicaCiclos() {
    var arreglo = [50, 30, 22, 15, 8, 3, 9, 10];
    var arregloOrdenado = [];
    var posicion = 0;
    var longitud = arreglo.length;


    for (var i = 0; i < longitud; i++) {
        var menor = 100;

        for (var j = 0; j < arreglo.length; j++) {
            if (arreglo[j] < menor) {
                menor = arreglo[j];
                posicion = j;
            }
        }

        arregloOrdenado[i] = menor;

        for (var k = 0; k < arreglo.length; k++) {
            if (arreglo[k] == menor) {
                arreglo.splice(posicion, 1);
            }
        }

    }

    console.log(arregloOrdenado);
}