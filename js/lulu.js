import {Character, Enemy} from "./classes.js";


  //Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, 1, 0, '../assets/img/pjthree.png');
        
document.getElementById("three").innerHTML = `
<img src="${lulu.icon}" class="cundo-icon"/>
<h3>Name: ${lulu.name}</h3>
<h3><img src="../assets/img/lulu-level.png"/>${lulu.level}</h3>
<h3><img src="../assets/img/lulu-atk-icon.png"/>${lulu.atk}</h3>
<h3>XP: ${lulu.xp}</h3>
<br>
`;

console.log(lulu);


// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Zombie
let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 3);

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;

//Zombie Fight
function fightLuluZombie(){
    console.log(zombie);
     
    let resultado = lulu.atk > zombie.atk ? lulu.xp += 25 : lulu.xp += 0; 
        resultado ? console.log('You won!') : console.log('You lost!');
        xpSystem(resultado);
}


let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", ()=>{
    fightLuluZombie();
    popup();
    close();
});

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Popup

document.getElementById('modal').innerHTML = `
<img src="../assets/img/close.png" class="close" >
<img src="${lulu.spray}" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie">
`;

function popup(){
    document.querySelector('.bg-modal').style.display = "flex";
}



//Close Popup
function close(){
    let close = document.querySelector('.close');
    close.addEventListener("click", () => {
    document.querySelector('.bg-modal').style.display = "none";
    });
}


// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //



//Xp System?
//Xp System

//Levels
let levelOne = 0;
let levelTwo = 100;
let levelThree = 300;
let levelFour = 500;
let levelFive = 800;

function xpSystem(){

    //Levels
    if(lulu.xp >= levelOne && lulu.xp < levelTwo){
        lulu.level = 1;
    }
    if(lulu.xp >= levelTwo && lulu.xp < levelThree){
        lulu.level = 2;
    }
    if(lulu.xp >= levelThree && lulu.xp < levelFour){
       lulu.level = 3;
    }
    if(lulu.xp >= levelFour && lulu.xp < levelFive){
        lulu.level = 4;
    }
    if(lulu.xp >= levelFive){
        lulu.level = 5;
    }

    //Stats
    if(lulu.level == 2){
        lulu.atk = 16;
    }
    if(lulu.level == 3){
        lulu.atk = 17;
    }
    if(lulu.level == 4){
        lulu.atk = 19;
    }
    if(lulu.level == 5){
        lulu.atk = 20;
    }
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
    document.getElementById("three").innerHTML = `
    <img src="${lulu.icon}" class="cundo-icon"/>
    <h3>Name: ${lulu.name}</h3>
    <h3><img src="../assets/img/lulu-level.png"/>${lulu.level}</h3>
    <h3><img src="../assets/img/lulu-atk-icon.png"/>${lulu.atk}</h3>
    <h3>XP: ${lulu.xp}</h3>
    <br>
`;
 }, 1000)

 // ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Save / Load progress

//Save
function saveGame(){
    localStorage.setItem("char", JSON.stringify(cundo));
}

//Load
function loadGame(){
    cundo = JSON.parse(localStorage.getItem("char"));
}

let save = document.getElementById('save');
save.addEventListener("click", saveGame);

let load = document.getElementById('load');
load.addEventListener("click", loadGame);
