console.log(banho(5, 15));


function banho(quantidade, duracao) {
    const duracaoTotal = quantidade * duracao;
    const litrosPorMinuto = 9;

    return litrosPorMinuto * duracaoTotal;
}