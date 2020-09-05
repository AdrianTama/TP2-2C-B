// Complete the isBalanced function below.
function isBalanced(s) {

function isBalanced(cadena) {
    const pila = new Stack();
    var i = 0
    var equilibrio = true
    var caracter
    while (i < cadena.length() && equilibrio) {
        caracter = cadena.charAt(i);

        if (caracter == '(') {
            pila.push("(");
        } 
        else {
            if (caracter == '{') {
                pila.push("{");
            } 
            else {
                if (caracter == '[') {
                    pila.push("[");
                }
                else {
                    if (caracter == ')' || caracter == '}' || caracter == ']') {
                        if (!pila.empty()) {
                            switch (caracter) {
                                case ')':
                                    if (pila.peek().equals("(")) {
                                        pila.pop();
                                    } 
                                    else {
                                        System.out.println("Falta el parentesis abierto: ( ");
                                        equilibrio = false;
}
                                break;
                                case '}':
                                    if (pila.peek().equals("{")) {
                                        pila.pop();
                                    } 
                                    else {
                                        System.out.println("Falta la llave abierta: {");
                                        equilibrio = false;
                                    }
                                break;
                                case ']':
                                    if (pila.peek().equals("[")) {
                                        pila.pop();
                                    } 
                                    else {
                                        System.out.println("Falta el corchete abierto: [");
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
    if (pila.isEmpty() && equilibrio) {
        return true;
    } 
    else {
        return false;
    }
}    

    


// TESTS
//console.log(isBalanced('{[()]}') == 'YES');
//console.log(isBalanced('{[(])}') == 'NO');
//console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()'));