function validateInputs() {
  const inputs = document.querySelectorAll('#calculatorForm input[type="number"]');
  const errorMessage = document.getElementById('errorMessage');
  let allValid = true;

  inputs.forEach(input => {
    if (isNaN(input.value) || input.value.trim() === '' || input.value < 0) {
      allValid = false;
    }
  });

  if (!allValid) {
    errorMessage.textContent = 'Por favor, insira valores válidos.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    calculateWaterUsage();
  }
}

function calculateWaterUsage() {
  const litrosPorMinutoBanho = 12;
  const litrosPorMinutoLouca = 10;
  const litrosPorMinutoMaos = 2;
  const litrosPorMinutoDentes = 2;
  const litrosPorDescarga = 6;
  const litrosPorRoupa = 120;

  const banhos = parseInt(document.getElementById('banhos').value) || 0;
  const minutosBanho = parseInt(document.getElementById('minutosBanho').value) || 0;

  const louca = parseInt(document.getElementById('louca').value) || 0;
  const minutosLouca = parseInt(document.getElementById('minutosLouca').value) || 0;

  const maos = parseInt(document.getElementById('maos').value) || 0;
  const minutosMaos = parseInt(document.getElementById('minutosMaos').value) || 0;

  const dentes = parseInt(document.getElementById('dentes').value) || 0;
  const minutosDentes = parseInt(document.getElementById('minutosDentes').value) || 0;

  const roupa = parseInt(document.getElementById('roupa').value) || 0;
  const descarga = parseInt(document.getElementById('descarga').value) || 0;

  const litrosPorArvore = 1000;
  const consumoMensal =
    (banhos * minutosBanho * litrosPorMinutoBanho +
      louca * minutosLouca * litrosPorMinutoLouca +
      maos * minutosMaos * litrosPorMinutoMaos +
      dentes * minutosDentes * litrosPorMinutoDentes +
      descarga * litrosPorDescarga * 30 +
      (roupa * litrosPorRoupa * 4)) * 30;

  const consumoFormatado = consumoMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const resultadoConsumo = document.getElementById('resultadoConsumo');
  resultadoConsumo.textContent = `💧 Consumo em 1 mês: ${consumoFormatado} litros — 🌳 Equivalente a ${(consumoMensal / litrosPorArvore).toFixed(2)} árvores por mês.`
}