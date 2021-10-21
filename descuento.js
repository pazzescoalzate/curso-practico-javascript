

function calcularPrecioConDescuento(precio, descuento){

    const porcentajPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajPrecioConDescuento) / 100;
    
    return precioConDescuento;
}


function calcularDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const precioValue = inputPrecio.value; 

    const inputDescuento = document.getElementById("InputDescuento");
    const descuentoValue = inputDescuento.value;

    const precioFinal = calcularPrecioConDescuento(precioValue,descuentoValue);

    const resultP = document.getElementById("resultP");

    resultP.innerHTML = "El precio con descuento es de $" + precioFinal;
}


const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];


function validarCupon(){
    const inputPrice = document.getElementById("InputValor");
    const precioValue = inputPrice.value;
    
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        descuento = 25;
        break;
    }

    console.log(precioValue)
    console.log(cuponValue)

    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);
    const resultCupon = document.getElementById("resultCupon");
    resultCupon.innerText = "El precio con descuento son: $" + precioConDescuento;
}