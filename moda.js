const list = []

const listCount = {};

function calcularModa(list){
    list.map(
        function(elemento){
            if(listCount[elemento]){
                listCount[elemento] += 1;
            }else{
                listCount[elemento] = 1;
            }
        }
    );
    
    const listArray = Object.entries(listCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = listArray[listArray.length - 1]
    return moda;
}
