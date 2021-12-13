//
function criandoPalletas () {
    let coresPalleta = document.querySelectorAll(".color");
    console.log(coresPalleta);

    let arrayCores = ["black", "orange", "blue", "green"];

    for ( let i =0; i < arrayCores.length; i += 1){
        coresPalleta[i].style.backgroundColor = arrayCores[i];
    }
}

function criandoPixels (quantidadePixels){
    let pixelBoard = document.getElementById("pixel-board")

    for (let i =0; i < quantidadePixels; i +=1){
        let divPixel = document.createElement("div")
        pixelBoard.appendChild(divPixel);
        divPixel.className = "pixel"
        divPixel.style.backgroundColor = "white";
    }

}

window.onload = function () {
    criandoPalletas ();
    criandoPixels(25);
}