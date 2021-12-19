
let coresPaletta = document.querySelectorAll(".color");
let arrayCores = ["black"];
let pixelBoard = document.getElementById("pixel-board");
let divPixel = document.getElementById("pixel-board");
let paletta = document.getElementById("color-palette");
let valorNxN = document.getElementById("board-size"); 
let button = document.getElementById("clear-board");
let vqv = document.getElementById("generate-board");

//criar as palettas e dar cor 
function criandoPalettas() {
    for ( let i =0; i < arrayCores.length; i += 1){
        coresPaletta[i].style.backgroundColor = arrayCores[i];
    }
}

//criando cores aleatórias COMEÇANDO AQUI
function criandoCoresAleatórias (){
    for (let i=0; i< 3; i+=1){
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let corAleatoria = "rgb(" + r + "," + g + "," + b + ")";
        arrayCores.push(corAleatoria);   
    }
}
criandoCoresAleatórias();

//criando palettas
// esse treicho de código onde eu aplico um laço for para criar as divs, foi inspirado após uma conversa com o colega Fernando Rocha, da tribo C, o qual conversou comigo sobre usar divs dentro de divs, invés de criar e alocar div por div individualmente
function criandoPixels (quantidadePixels){  
    pixelBoard.style.width = (42*(Math.pow(quantidadePixels, 0.5)))+'px'; //math.pow calcula a raiz do número Math.pow(base, expoente)
    for (let i =0; i < quantidadePixels; i +=1){
        let divPixel = document.createElement("div")
        pixelBoard.appendChild(divPixel);
        divPixel.className = "pixel"
        divPixel.style.backgroundColor = "white";
    }
}
criandoPixels(25);

//fazer iniciar com a cor preta 
function iniciandoCorPreta() {
    coresPaletta[0].classList.add("selected");   
}
iniciandoCorPreta();

function pintandoDePreto(event){        
    event.target.style.backgroundColor = "black";
}

//remove a classe selected de todos lugares, seleciona a cor e depois aplica nos pixels
function selecionaCor(event){
    for (let i=0; i < arrayCores.length; i +=1){
        coresPaletta[i].classList.remove("selected");
    }    
    let corAplicavel = event.target.style.backgroundColor;
        event.target.classList.add("selected");
    divPixel.addEventListener('click', function (event) {
        event.target.style.backgroundColor = corAplicavel;
    })
}

//bloco de código para limpar as cores  do quadro
function limparCores() {
    let valorInput = valorNxN.value; 
    let todasDivsPixelBoard = document.querySelectorAll('.pixel');
    if (valorInput > 5){
        for ( let i = 0; i < valorInput*valorInput; i +=1){
            todasDivsPixelBoard[i].style.backgroundColor = "white";
        }
    } 
    else {
        for ( let i = 0; i < 25; i +=1){
            todasDivsPixelBoard[i].style.backgroundColor = "white";
        }
    }
}

//bloco de código para apagar todas as divs e gerar novo board usando o botão VQV    
function aumentarPixelBoard() {
    let valorInput = valorNxN.value;
    while (divPixel.firstChild){ //enquanto houver firstChilds, irá remover sempre o firstChild
        divPixel.removeChild(divPixel.firstChild)
    }
    if (valorInput > 0 && valorInput < 5){ //requisito 11
        //colegas da turma 19-C, Hellen Ribas, Emerson Alves e Diogo Martini me ajudaram a fazer essa lógica das condicionais            
        valorInput = 5;
        criandoPixels (valorInput*valorInput);
    }
    else if (valorInput >= 5 && valorInput <= 50){
        criandoPixels (valorInput*valorInput);
    }
    else if (valorInput > 50){
        valorInput = 50;
        criandoPixels (valorInput*valorInput);
    }
    else {
        alert("Board inválido!");
    }
}

divPixel.addEventListener('click', pintandoDePreto);
paletta.addEventListener('click', selecionaCor);
button.addEventListener('click', limparCores);
vqv.addEventListener('click', aumentarPixelBoard);

window.onload = function () {
    criandoPalettas();   
}