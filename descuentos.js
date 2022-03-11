function calcularPrecioConDescuento(precio,  descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function fivePercent(precio){
    const cupon50 = precio * (0.5);
    return cupon50;
}

function twentyPercent(precio){
    const cupon20 = precio * (0.8);
    return cupon20;
}



function priceDiscountButton(){
    const inputPrice =document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount =document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function priceCouponButton(){
    const inputCoupon =document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const inputPrice =document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    if(couponValue == "50percent"){
        const precioCoupon = fivePercent(priceValue);
        const couponPrice = document.getElementById("couponPrice");couponPrice.innerText = "El precio con descuento son: $" + precioCoupon;
    }
    else if (couponValue == "20percent"){
        const precioCoupon = twentyPercent(priceValue);
        const couponPrice = document.getElementById("couponPrice");
        couponPrice.innerText = "El precio con descuento son: $" + precioCoupon;
    }
    else{
        const couponPrice = document.getElementById("couponPrice");couponPrice.innerText = "Ese codigo no existe MALPARIDO ESTUPIDO";
    }
}