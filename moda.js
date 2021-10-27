list1 =[
    1,
    2,
    4,
    1,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    2,
    2,
    2,
    1,
];

const list1Count = {};

list1.map(
    function (element){
        if(list1Count[element]){
            list1Count[element] += 1;
        }else{
            list1Count[element] = 1;
        }       
    }
);


const listArray = Object.entries(list1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
      }
);

const moda = listArray[listArray.length - 1];
