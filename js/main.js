const litrosPorArvore = 1000;

const ConsumoAgua = { 
    banho: { litrosPorMinuto: 9, perMin: true },
    louca: { litrosPorMinuto: 7, perMin: true },
    lavarmaos: { litrosPorMinuto: 7, perMin: true },
    dentes: { litros: 4.8, perMin: false },
    roupa: { litros: 195, perMin: false }
};

function getValue(id) {
  return parseInt(document.getElementById(id).value);
}

function calcularLitros(atividade, quantidade, duracao = 1) {
  const tipoAtividade = ConsumoAgua[atividade];
  const quantidadeAtividade = parseInt(quantidade);
  const duracaoAtividade = parseInt(duracao);
  
  if (!tipoAtividade) return "❌️ Atividade não encontrada"; 
  
  if (tipoAtividade.perMin) {
    const minutosTotais = quantidadeAtividade * duracaoAtividade;
    return (minutosTotais * tipoAtividade.litrosPorMinuto).toFixed(1);
  } else {
    return (quantidadeAtividade * tipoAtividade.litros).toFixed(1);
  }
}

function calcularArvores() {
    const DIAS = 7;

    const atividade = document.getElementById('atividade').value;
    const quantidade = getValue("quantidade");
    const duracao = getValue("duracao");

    const litros = calcularLitros(atividade, quantidade, duracao);

    console.log()
    document.getElementById("resultado").textContent = 
        `💧 Consumo em 1 mês: ${litros * DIAS} litros — 🌳 Equivalente a ${((litros / litrosPorArvore) * DIAS).toFixed(2)} árvores por mês.`;
}
