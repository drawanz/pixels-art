const coresPaletta = document.querySelectorAll('.color');
const arrayCores = ['black'];
const pixelBoard = document.getElementById('pixel-board');
const divPixel = document.getElementById('pixel-board');
const paletta = document.getElementById('color-palette');
const valorNxN = document.getElementById('board-size');
const button = document.getElementById('clear-board');
const vqv = document.getElementById('generate-board');
const valorInput = valorNxN.value;

//  criar as palettas e dar cor
function criandoPalettas() {
  for (let i = 0; i < arrayCores.length; i += 1) {
    coresPaletta[i].style.backgroundColor = arrayCores[i];
  }
}

// criando cores aleatórias COMEÇANDO AQUI
function criandoCoresAleatórias() {
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const corAleatoria = `rgb(${r}, ${g}, ${b})`;
    arrayCores.push(corAleatoria);
  }
}
criandoCoresAleatórias();

//  criando palettas
function criandoPixels(quantidadePixels) {
  const widthValor = (42 * (quantidadePixels ** 0.5));
  pixelBoard.style.width = `${widthValor}px`;
  // math.pow calcula a raiz do número Math.pow(base, expoente)
  for (let i = 0; i < quantidadePixels; i += 1) {
    const divPixels = document.createElement('div');
    pixelBoard.appendChild(divPixels);
    divPixels.className = 'pixel';
    divPixels.style.backgroundColor = 'white';
  }
}
criandoPixels(25);

function iniciandoCorPreta() {
  coresPaletta[0].classList.add('selected');
}
iniciandoCorPreta();

function pintandoDePreto(event) {
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = 'black';
}

function selecionaCorEAplica(event) {
  for (let i = 0; i < arrayCores.length; i += 1) {
    coresPaletta[i].classList.remove('selected');
  }
  const corAplicavel = event.target.style.backgroundColor;
  event.target.classList.add('selected');
  divPixel.addEventListener('click', (event) => {
    event.target.style.backgroundColor = corAplicavel;
  });
}

const backgroundColor = () => {
  const todasDivsPixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < 25; i += 1) {
    todasDivsPixelBoard[i].style.backgroundColor = 'white';
  }
};

const backgroundColor5 = () => {
  const todasDivsPixelBoard = document.querySelectorAll('.pixel');
  for (let i = 0; i < valorInput * valorInput; i += 1) {
    todasDivsPixelBoard[i].style.backgroundColor = 'white';
  }
};

function removeDivs() {
  while (divPixel.firstChild) {
    divPixel.removeChild(divPixel.firstChild);
  }
}

function limparCores() {
  if (valorInput > 5) {
    backgroundColor5();
  } else {
    backgroundColor();
  }
  removeDivs();
  criandoPixels(25);
}

//  bloco de código para apagar todas as divs e gerar novo board usando o botão VQV
function aumentarPixelBoard() {
  let valorInput = valorNxN.value;
  removeDivs();
  if (valorInput > 0 && valorInput < 5) {
    valorInput = 5;
    criandoPixels (valorInput*valorInput);
  }
  else if (valorInput >= 5 && valorInput <= 50) {
    criandoPixels (valorInput*valorInput);
  }
  else if (valorInput > 50) {
    valorInput = 50;
    criandoPixels (valorInput*valorInput);
  }
  else {
    alert("Board inválido!");
  }
}

divPixel.addEventListener('click', pintandoDePreto);
paletta.addEventListener('click', selecionaCorEAplica);
button.addEventListener('click', limparCores);
vqv.addEventListener('click', aumentarPixelBoard);

window.onload = function () {
  criandoPalettas();
};
