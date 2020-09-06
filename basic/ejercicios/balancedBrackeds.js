// Complete the isBalanced function below.

function isBalanced(s) {
   
    var pila = []
    var i = 0
    var equilibrio = true
    var caracter

    

    while (i < s.length && equilibrio) {
        caracter = s.charAt(i);

        if (caracter == '(') {
            pila.push('(');
        } 
        else {
            if (caracter == '{') {
                pila.push('{');
            } 
            else {
                if (caracter == '[') {
                    pila.push('[');
                }
                else {
                    if (caracter == ')' || caracter == '}' || caracter == ']') {
                        if (!pila.isEmpty) {
                            switch (caracter) {
                                case ')':
                                    if (peek(pila)==='(') {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta el parentesis abierto: (');
                                        equilibrio = false;
                                    }                                   
                                break;
                                case '}':
                                    if (peek(pila)===('{')) {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta la llave abierta: {');
                                        equilibrio = false;
                                    }
                                break;
                                case ']':
                                    if (peek(pila)===('[')) {
                                        pila.pop();
                                    } 
                                    else {
                                        console.log('Falta el corchete abierto: [');
                                        equilibrio = false;
                                    }
                                break;
                            }
                        }    
                        else {
                            equilibrio = false;
                        }
                    }
                }
            }
        }
        i++;
}
    if (pila.length===0 && equilibrio) {
        return true;
    } 
    else {
        return false;
    }
}    

// Nos muestra el primer elemento que está en el array
function peek(pila){
    return pila[pila.length - 1]
}
    


// TESTS
console.log(isBalanced('{[()]}'))
console.log('----------------')
console.log(isBalanced('{[(])}'))
console.log('----------------')
console.log(isBalanced('{{[[(())]]}}'))
console.log('----------------')
console.log(isBalanced('{{[[(())]]}}{}()'))


