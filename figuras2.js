

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


/* Triangulos */

function perimetroTriangulo(lado1, lado2, base){
    return (lado1) + (lado2) + (base);
}

function areaTriangulo(base, altura){
    return (base*altura) / 2;
}


/* Circulo */


function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio){
    return (radio * radio) * PI;
}



/*Aque interactuamos con el html*/

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro)

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area)

}


function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const inputLado2 = document.getElementById("inputLado2");
    const inputBase = document.getElementById("inputBase");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro)

}

