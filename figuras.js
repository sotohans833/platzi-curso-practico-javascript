//Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 10;
// console.log("los lados del cuadrado miden " + ladoCuadrado + " Centimetros");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("el perimetro del cuadrado es " + perimetroCuadrado + " Centimetros");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("el area del cuadrado es " + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base){
    return (base * altura)/2;
}

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

const PI = Math.PI;

function alturaTriangulo(ladoA, ladoB, base){
    if(ladoA == ladoB){
        return Math.sqrt((ladoA * ladoA)-((base * base)/4))
    }
    else {
        alert("Lo sentimos este no es un triangulo isoceles");
    }
}

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCircunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

//CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro + " Centimetros");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area + " Centimetros^2");
}
// TRIANGULO

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const valor1 = Number(lado1.value);

    const lado2 = document.getElementById("lado2");
    const valor2 = Number(lado2.value);
    
    const base = document.getElementById("base");
    const valor3 = Number(base.value);

    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    alert(perimetro + " Centimetros");
}

function calcularAreaTriangulo(){
    const base = document.getElementById("base");
    const valor = Number(base.value);

    const altura = document.getElementById("altura");
    const valor1 = Number(altura.value);

    const area = areaTriangulo(valor, valor1);
    alert(area + " Centimetros^2");
}

function calcularAlturaTriangulo(){
    const base = document.getElementById("base");
    const valor = Number(base.value);

    const lado1 = document.getElementById("lado1");
    const valor1 = Number(lado1.value);

    const lado2 = document.getElementById("lado2");
    const valor2 = Number(lado2.value);

    const altura = alturaTriangulo(valor1, valor2, valor);
    alert(altura + " Centimetros");
}

//CIRCULO

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const valor = input.value;

    const perimetro = perimetroCircunferencia(valor);
    alert(perimetro + " Centimetros");
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const valor = input.value;

    const area = areaCirculo(valor);
    alert(area + " Centimetros^2");
}