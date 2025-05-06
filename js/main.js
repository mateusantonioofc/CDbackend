const litrosPorArvore = 1000;
const DIAS = 30;

const ConsumoAgua = { 
    banho: { litrosPorMinuto: 9, duracao: true },
    louca: { litrosPorMinuto: 7, duracao: true },
    lavarmaos: { litrosPorMinuto: 0.5, duracao: true },
    dentes: { litrosPorMinuto: 4.8, duracao: true },
    roupas: { litrosPorMinuto: 195, duracao: false },
};

function getValue(id) {
  return parseInt(document.getElementById(id).value);
}

function calcularLitros(atividade, quantidade, duracao = 1) {
  const tipoAtividade = ConsumoAgua[atividade];
  const quantidadeAtividade = parseInt(quantidade);
  const duracaoAtividade = parseInt(duracao);
  
  if (!tipoAtividade) return "❌️ Atividade não encontrada"; 
  
  if (tipoAtividade.duracao) {
    const minutosTotais = quantidadeAtividade * duracaoAtividade;
    return (minutosTotais * tipoAtividade.litrosPorMinuto).toFixed(1);
  } else if(!tipoAtividade.duracao) {
    return (quantidadeAtividade * tipoAtividade.litros).toFixed(1);
  }
}

function calcularArvores() {
    const atividade = document.getElementById('atividade').value;
    const quantidade = getValue("quantidade");
    const duracao = getValue("duracao");

    const litros = calcularLitros(atividade, quantidade, duracao);
    const litrosMensal = litros * DIAS;

    console.log()
    document.getElementById("resultado").textContent = 
        `💧 Consumo em 1 mês: ${litrosMensal} litros 🌳—  Equivalente a ${((litrosMensal / litrosPorArvore)).toFixed(2)} árvores por mês.`;
}
