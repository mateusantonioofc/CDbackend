document.getElementById('form').addEventListener('submit', function(event) { // lembrete: trocar para o id do form
    
});

function calcularQuantidadeArvores(litros) {
    const litrosPorArvore = 1000;
    return litros / litrosPorArvore;
}

function banho(quantidade, duracao) {
    const duracaoTotal = quantidade * duracao;
    const litrosPorMinuto = 9;

    return litrosPorMinuto * duracaoTotal;
}

function lavarLouca(quantidade, duracao) {
    const duracaoTotal = quantidade * duracao;
    const litrosPorMinuto = 7;
    return litrosPorMinuto * litrosPorMinuto;
}

function lavarMaos(quantidade) {
    const litros = 7;
    return quantidade * litros;
}

function lavarRoupas(quantidade) {
    const litros = 195;
    return quantidade * litros;
}

function escovarDestes(quantidade) {
    const litros = 4.8;
    return quantidade * litros
}

function descarga(quantidade) {
    const litrosPorMinuto = 12;
    return quantidade * litrosPorMinuto;
}