
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

let list = [];

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

function calcularMediana(){

    const ele1 = document.getElementById("number1");
    const ele2 = document.getElementById("number2");
    const ele3 = document.getElementById("number3");
    const ele4 = document.getElementById("number4");
    const ele5 = document.getElementById("number5");
    const ele6 = document.getElementById("number6");
    const ele7 = document.getElementById("number7");
    list = [Number(ele1.value), Number(ele2.value), Number(ele3.value), Number(ele4.value), Number(ele5.value), Number(ele6.value), Number(ele7.value)]

    function compare(a, b){
        return a - b;
    }
    
    let ordenados = list.sort(compare);

    if(esPar(ordenados.length)){
        const element1 = ordenados[mitad - 1];
        const element2 = ordenados[mitad];
        const promedioElementos = calcularMediaAritmetica([element1, element2]);
        mediana = promedioElementos;
    }
    else{
        mediana = ordenados[(parseInt(ordenados.length / 2))];
    }
    console.log(mediana);
}



