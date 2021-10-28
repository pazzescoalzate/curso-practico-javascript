
//Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(list) {
    const sumaList = list.reduce(
        function(valorAcumulado = 0, nuevoElement){
            return valorAcumulado + nuevoElement;
        }
    );

    const promedioList = sumaList / list.length;

    return promedioList;
}

//Calculadora de medianas

function medianaSalarios(list){
    const mitad = parseInt (list.length / 2);

    if (esPar(list.length)){
        const personMitad1 = list[mitad - 1];
        const pesonaMitad2 = list[mitad];

        const promedioElement1y2 = calcularMediaAritmetica([
            personMitad1,
            pesonaMitad2,
        ]);

        return promedioElement1y2;

    }else{
        const personMitad = list[mitad];
        return personMitad
    }
}

//mediana general

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);



const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});