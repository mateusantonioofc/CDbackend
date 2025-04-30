function calcularQuantidadeArvores(litros) {
    const litrosPorArvore = 100; // alterar para o numero real
    return litros / litrosPorArvore;
}

function banho(quantidade, duracao) {
    const duracaoTotal = quantidade * duracao;
    const litrosPorMinuto = 9;

    return litrosPorMinuto * duracaoTotal;
}

function descarga(quantidade) {
    const litrosPorMinuto = 12; // alterar para o valor real
    return quantidade * litrosPorMinuto;
}