function staircase(x) {
    let cont = 0;
    let signo = "#";
    let cadena = "";
    while (cont < x) {
        cadena = cadena + signo;
        console.log(cadena);
        cont++;
    }
}

staircase(6);