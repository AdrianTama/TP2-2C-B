let array = [10, 20, 20, 20, 20, 30, 50, 10, 20];


function ordenarArray () {
 let arrayOrdenado = array.sort();
 return arrayOrdenado;
}
let miArray = ordenarArray();

function contarParejas(miArray) {
    let pares = 0;
    let fin = false;
    let index = 0;
    while(!fin){
        if(miArray[index] == miArray[index + 1]) {
            pares++;
            miArray.shift(); // saco el primer elemento del par
            miArray.shift(); // saco el segundo elemento del par
        } 
        if (miArray[index] != miArray[index + 1]) {
            index++;
        }
        if (index == miArray.length){
            fin = true;
        } 
    }
       return pares; 
}
console.log(contarParejas(miArray));