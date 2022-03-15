// HELPERS

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

//Calculadora Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personMitad1 = lista[mitad] - 1;
        const personMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana
    }else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}


//Mediana General

const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a, b){
        return a - b;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%


const spliceStart = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart; 
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

console.log({salariosColTop10, medianaGeneralCol});

