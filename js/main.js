const litrosPorArvore = 1000;

const ConsumoAgua = {
  banho: { litrosPorMinuto: 9, perMin: true },
  louca: { litrosPorMinuto: 7, perMin: true },
  lavarmaos: { litrosPorMinuto: 7, perMin: true },
  descarga: { litros: 12, perMin: false },
  dentes: { litros: 4.8, perMin: false },
  roupa: { litros: 195, perMin: false }
}

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

function calcularArvores(totalLitros) {
  const litros = parseInt(totalLitros);
  return (litros / litrosPorArvore).toFixed(1)
}
