
// organizando os paletes lado a lado e colocando cor neles
let elementoPai = document.getElementById("color-palette");
let pallete = document.getElementsByClassName("color");
let arrayCores = ['Black', 'blue', 'red', 'orange']
for ( let i = 0; i < pallete.length; i +=1){
    elementoPai.appendChild(pallete[i]);
    pallete[i].style.position = "absolute";
    pallete[i].style.top = '152px';
    pallete[i].style.left = (8 + 55*[i]) + 'px';
    pallete[i].style.backgroundColor = arrayCores[i]
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
