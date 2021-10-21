//Calculo cuadrado

console.group("Cuadrados")

const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimero del cuadrado es " + perimetroCuadrado + " cm")


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El Area del cuadrado es " + areaCuadrado + " cm°2")

console.groupEnd()

//Calculo triangulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimero del triangulo es " + perimetroTriangulo + " cm")


const  areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El area del triangulo es " + areaTriangulo + " cm°2")


console.groupEnd()


//Calculo circulo

console.group("Circulo")

const  radioCirculo = 4;

console.log("El radio del circulo es " + radioCirculo + " cm")

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del circulo es " + diametroCirculo + " cm")

const PI = Math.PI;

console.log("PI es " + PI )

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del circulo es " + perimetroCirculo + " cm")

const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El area del circulo es " + areaCirculo + " cm°2")


console.groupEnd()