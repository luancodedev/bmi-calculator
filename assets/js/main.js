const calculaImc = (altura, peso) => {
  const alturaConvertida = Number(altura) / 100;
  const pesoConvertido = Number(peso);

  return (pesoConvertido / alturaConvertida ** 2).toFixed(1);
};

const classificaImc = (imc) => {
  if (imc < 18.5) {
    return `Magreza`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Normal`;
  } else if (imc >= 25 && imc < 30) {
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
};

const altura = document.getElementById(`altura`);
const peso = document.getElementById(`peso`);

const botaoCalcular = document.getElementById(`botao-calcular`);
const botaoLimpar = document.getElementById(`botao-limpar`);

const resultado = document.getElementById(`resultado`);

botaoCalcular.addEventListener(`click`, () => {
  if (!altura.value || !peso.value) {
    return false;
  }

  const imc = calculaImc(altura.value, peso.value);
  const classificacao = classificaImc(imc);

  resultado.innerText = `${imc} e você está na categoria: ${classificacao}`;

  return true;
});

botaoLimpar.addEventListener(`click`, () => {
  altura.value = '';
  peso.value = '';
  resultado.innerText = '...';
});
