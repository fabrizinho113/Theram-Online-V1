import {Character, Enemy} from "./classes.js";

//Reyna
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, 1, 0 ,'../assets/img/pjtwo.png');
    
document.getElementById("two").innerHTML = `
<img src="${reyna.icon}" class="cundo-icon"/>
<h3>Name: ${reyna.name}</h3>
<h3><img src="../assets/img/reyna-level.png"/>${reyna.level}</h3>
<h3><img src="../assets/img/reyna-atk-icon.png"/>${reyna.atk}</h3>
<h3>XP: ${reyna.xp}</h3>
<br>
`;

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
function fightReynaZombie(){
        console.log(zombie);
    
        let resultado = reyna.atk > zombie.atk ? reyna.xp += 25 : reyna.xp += 0; 
        resultado ? console.log('You won!') : console.log('You lost!');
        xpSystem(resultado);
    }

let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    fightReynaZombie();
    popup();
    close();
});
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Popup

document.getElementById('modal').innerHTML = `
<img src="../assets/img/close.png" class="close" >
<img src="${reyna.spray}" alt="Cundo" class="cundo-character">
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

/*
Posible sistema de items?

*/

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //



//Xp System

//Levels
let levelOne = 0;
let levelTwo = 100;
let levelThree = 300;
let levelFour = 500;
let levelFive = 800;

function xpSystem(){

    //Levels
    if(reyna.xp >= levelOne && reyna.xp < levelTwo){
        reyna.level = 1;
    }
    if(reyna.xp >= levelTwo && reyna.xp < levelThree){
        reyna.level = 2;
    }
    if(reyna.xp >= levelThree && reyna.xp < levelFour){
        reyna.level = 3;
    }
    if(reyna.xp >= levelFour && reyna.xp < levelFive){
        reyna.level = 4;
    }
    if(reyna.xp >= levelFive){
        reyna.level = 5;
    }

    //Stats
    if(reyna.level == 2){
        reyna.atk = 12;
    }
    if(reyna.level == 3){
        reyna.atk = 15;
    }
    if(reyna.level == 4){
        reyna.atk = 16;
    }
    if(reyna.level == 5){
        reyna.atk = 19;
    }
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
    document.getElementById("two").innerHTML = `
    <img src="${reyna.icon}" class="cundo-icon"/>
    <h3>Name: ${reyna.name}</h3>
    <h3><img src="../assets/img/reyna-level.png"/>${reyna.level}</h3>
    <h3><img src="../assets/img/reyna-atk-icon.png"/>${reyna.atk}</h3>
    <h3>XP: ${reyna.xp}</h3>
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

