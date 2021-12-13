//
let coresPaletta = document.querySelectorAll(".color");
let arrayCores = ["black", "orange", "blue", "green"];

function criandoPalettas () {
        for ( let i =0; i < arrayCores.length; i += 1){
        coresPaletta[i].style.backgroundColor = arrayCores[i];
    }
}

// esse treicho de código onde eu aplico um laço for para criar as divs, foi inspirado após uma conversa com o colega Fernando Rocha, da tribo C, o qual conversou comigo sobre usar divs dentro de divs, invés de criar e alocar div por div individualmente
let pixelBoard = document.getElementById("pixel-board")

function criandoPixels (quantidadePixels){  
    for (let i =0; i < quantidadePixels; i +=1){
        let divPixel = document.createElement("div")
        pixelBoard.appendChild(divPixel);
        divPixel.className = "pixel"
        divPixel.style.backgroundColor = "white";
    }
}

let divPixel = document.getElementById("pixel-board")

function iniciandoCorPreta () {
    coresPaletta[0].classList.add("selected");    
    
    divPixel.addEventListener('click', function (event){        
        event.target.style.backgroundColor = "black";
        console.log(event.target);
    })
}

iniciandoCorPreta ()

function removendoClasse () {
    for (let i=0; i < arrayCores.length; i +=1){
          coresPaletta[i].classList.remove("selected");
          console.log("teste");
    }
}

let paletta = document.getElementById("color-palette")

function pintandoPixels () {      
    paletta.addEventListener('click', function (event){  
        removendoClasse ();      
        let corAplicavel = event.target.style.backgroundColor;
        event.target.classList.add("selected");
        divPixel.addEventListener('click', function (event) {
        event.target.style.backgroundColor = corAplicavel;
        })
    })        
}



window.onload = function () {
    criandoPalettas ();
    criandoPixels (25);
    //iniciandoCorPreta ();
    pintandoPixels ()
    //removendoClasse();
}