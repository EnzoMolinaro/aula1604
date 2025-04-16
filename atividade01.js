function calcularArea() {
    // Obtém os valores das entradas
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let baseMaior = parseFloat(document.getElementById('baseMaior').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Calcula a área
    let area = ((baseMaior + baseMenor) * altura) / 2;

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = "A área do trapézio é: " + area;
}