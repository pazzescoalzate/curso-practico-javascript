const list1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

for ( let i = 0; i < list1.length; i++) {
    sumaLista1 = sumaLista1 + list1[i];
}

const promedioList1 = sumaLista1 / list1.length;


function calcularMediaAritmetica(list) {
    // let sumaList = 0;

    // for ( let i = 0; i < list.length; i++) {
    //     sumaList = sumaList + list[i];
    // }

    const sumaList = list.reduce(
        function(valorAcumulado = 0, nuevoElement){
            return valorAcumulado + nuevoElement;
        }
    );

    const promedioList = sumaList / list.length;

    return promedioList;
}