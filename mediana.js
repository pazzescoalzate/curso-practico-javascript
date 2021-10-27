
function calcularMediaAritmetica(list) {
    const sumaList = list.reduce(
        function(valorAcumulado = 0, nuevoElement){
            return valorAcumulado + nuevoElement;
        }
    );

    const promedioList = sumaList / list.length;

    return promedioList;
}

const lista1 =[
100,
200,
500,
400000000
];

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }  
    
}

let mediana; 

if (esPar(lista1.length)){
    const element1 = lista1[mitadLista1];
    const element2 = lista1[mitadLista1 - 1];

const promedioElement1y2 = calcularMediaAritmetica([
    element1,
    element2,
]);

mediana = promedioElement1y2;

}else{
    mediana = lista1[mitadLista1];

}