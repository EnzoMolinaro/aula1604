function somar(){
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let total = valor1 + valor2;
    if (total >= 20){
        total += 8
    }
    else {
        total -=5
    }

    document.getElementById('resultado').innerHTML = "Resultado: " + total;
}