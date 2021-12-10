// organizando os paletes lado a lado e colocando cor neles
let elementoPai = document.getElementById("color-palette");
let pallete = document.getElementsByClassName("color");
let arrayCores = ['Black', 'blue', 'red', 'orange'];


    function criandoPalletes (parametro) {
        for ( let i = 0; i < parametro; i +=1){
            elementoPai.appendChild(pallete[i]);
            pallete[i].style.position = "absolute";
            pallete[i].style.top = '152px';
            pallete[i].style.left = (8 + 54*[i]) + 'px';
            pallete[i].style.backgroundColor = arrayCores[i]
        }
    }   

     

// criando as divisões para criar o "pixelboard"
// esse treicho de código foi inspirado após uma conversa com o colega Fernando Rocha, da tribo C, o qual conversou comigo em uma dinâmica do zoom no dia 09/12/21, sobre usar divs dentro de divs, ao invés de criar e alocar div por div individualmente.  
    let sectionPixelBoard = document.createElement("section");
    document.body.appendChild(sectionPixelBoard);
    sectionPixelBoard.setAttribute("id", "pixel-board");
    sectionPixelBoard.style.position = "absolute";
    sectionPixelBoard.style.top = "220px";

    
    function quantidadePixels (quantidade) {
        for ( let i = 1; i <= quantidade; i +=1){
            let div = document.createElement("div");
            sectionPixelBoard.appendChild(div);
            div.className = "pixel"
            div.style.backgroundColor= "white";
        }
    }


    // resolução do requisito 6
    
   
    function pintandoPixels (){
        pallete[0].classList.add("selected");
    }

    
   
    
    window.onload = function () {
        criandoPalletes (pallete.length);  
        quantidadePixels(25);
        pintandoPixels();
    }

    /* let pallete0 = document.getElementsByClassName("color")[0];
    pallete0.style.position = "absolute";
    pallete0.style.top = "150px"


    let pallete1 = document.getElementsByClassName("color")[1];
    pallete1.style.position = "absolute";
    pallete1.style.top = "200px"

    let pallete2 = document.getElementsByClassName("color")[2];
    pallete2.style.position = "absolute";
    pallete2.style.top = "250px"

    let pallete3 = document.getElementsByClassName("color")[3];
    pallete3.style.position = "absolute";
    pallete3.style.top = "300px"*/ 

