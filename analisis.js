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

function esPar(numero){
    return (numero % 2 === 0);
}


function medianaSalarios(list){
    const mitad = parseInt (list.length / 2);
}