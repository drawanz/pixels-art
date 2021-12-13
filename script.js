// criando a paletta de cores
let sectionPaiPalette = document.getElementById("color-palette")
let divsFilhasPallete = document.getElementsByClassName("color")
let arrayCores = ["black", "orange", "blue", "green"]

for ( let i =0; i <= arrayCores.length; i +=1){
    divsFilhasPallete[i].style.backgroundColor = arrayCores[i];
}