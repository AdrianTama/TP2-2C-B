var array = [9,3,5,7,1];

function encontrarMinimo(){
    var minimo = 999999;
    for (let index = 0; index < array.length; index++) {
        if (array[index] < minimo){
            minimo = array[index];
        }
    }
    return minimo;
}

function encontrarMaximo() {
    var maximo = -10;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > maximo){
            maximo = array[index];
        }
    }
    return maximo;
}

function sumarConValor(valor){
    var count= 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] != valor){
            count += array[index];
        }
    }
    return count;
}
var minimo = encontrarMinimo();
console.log(minimo);

var maximo = encontrarMaximo();
console.log(maximo)

var sumaConMinimo = sumarConValor(minimo);
console.log(sumaConMinimo);
var sumaConMaximo = sumarConValor(maximo);
console.log(sumaConMaximo);