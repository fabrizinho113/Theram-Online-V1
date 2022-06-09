import {Character} from "./classes.js";


//Audio
let audio = document.getElementById("characterSelect");
audio.volume = 0.1;




//Personajes

//Cundo

let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, 1, 0,  "../assets/img/pjone.png");


document.getElementById("one").innerHTML = `
<img src="${cundo.icon}"/>
<h3>Name: ${cundo.name}</h3>
<br>
<h3>ATK: ${cundo.atk}</h3>
<img src="${cundo.spray}"/>
<br>
<button id="cundo">Select</button>
`;
console.log(cundo);

//Reyna
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, 1, 0 ,'../assets/img/pjtwo.png');
    
document.getElementById("two").innerHTML = `
    <img src="${reyna.icon}"/>
    <h3>Name: ${reyna.name}</h3>
    <br>
    <h3>ATK: ${reyna.atk}</h3>
    <img src="${reyna.spray}"/>
    <br>
    <button id="reyna">Select</button>
    `;

console.log(reyna);


//Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, 1, 0, '../assets/img/pjthree.png');
        
document.getElementById("three").innerHTML = `
    <img src="${lulu.icon}"/>
    <h3>Name: ${lulu.name}</h3>
    <br>
    <h3>ATK: ${lulu.atk}</h3>
    <img src="${lulu.spray}"/>
    <br>
    <button id="lulu"">Select</button>
    `;

console.log(lulu);


//Functions

function characterOne(){

    window.location.href = "../pages/character-cundo.html";
}

function characterTwo(){

    window.location.href = "../pages/character-reyna.html";
}

function characterThree(){

    window.location.href = "../pages/character-lulu.html";
}


let buttonCundo = document.getElementById("cundo");
buttonCundo.addEventListener("click", characterOne);

let buttonReyna = document.getElementById("reyna");
buttonReyna.addEventListener("click", characterTwo);

let buttonLulu = document.getElementById("lulu");
buttonLulu.addEventListener("click", characterThree);
