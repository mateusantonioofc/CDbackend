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
    const litrosLavarMaos = 7;
    return quantidade * litrosLavarMaos;
}

function lavarRoupas(quantidade) {
    const litrosLavarRoupas = 195;
    return quantidade * litrosLavarRoupas;
}

function escovarDestes(quantidade) {
    const litrosEscovarDestes = 4.8;
    return quantidade * litrosEscovarDestes;
}

function descarga(quantidade) {
    const litrosPorMinuto = 12;
    return quantidade * litrosPorMinuto;
}