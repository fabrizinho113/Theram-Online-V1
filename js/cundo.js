import {Character, Enemy} from "./classes.js";


//Cundo
let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, 1, 0,  "../assets/img/pjone.png");


document.getElementById("one").innerHTML = `
<img src="${cundo.icon}" class="cundo-icon"/>
<h3>Name: ${cundo.name}</h3>
<h3><img src="../assets/img/cundo-level.png"/>${cundo.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/>${cundo.atk}</h3>
<h3>XP: ${cundo.xp}</h3>
<br>
`;

console.log(cundo);

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Music 
let battleMusic = new Audio("../assets/music/FF7-battle-theme-8bits.mp3");
battleMusic.volume = 0.1;

function musicPlay() {
    battleMusic.play();
}

function musicStop() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
}


//Zombie
let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 3);

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;


//Fight Zombie
function fightCundoZombie(){

        console.log(zombie);

        let result = cundo.atk > zombie.atk ? cundo.xp += 25 : cundo.xp += 0; 
        result ? console.log('You won!') : console.log('You lost!');
        xpSystem(result);
}

//Zombie Button
let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    musicPlay();
    fightCundoZombie();
    popup();
    close();
});

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //


//Popup

document.getElementById('modal').innerHTML = `
<img src="../assets/img/close.png" class="close" >
<img src="${cundo.spray}" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie" class="zombie-character">
<div class="actions">
    <button>Hit</button>
    <button>Magic</button>
    <button>Special</button>
    <button>Run</button>
</div>
`;

function popup(){
    document.querySelector('.bg-modal').style.display = "flex";
}



//Close Popup
function close(){
    let close = document.querySelector('.close');
    close.addEventListener("click", () => {
    musicStop();
    document.querySelector('.bg-modal').style.display = "none";
    });
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //




//Potions
/*let potionsArray = [];

let buttonPotion = document.getElementById("potion");
buttonPotion.addEventListener("click", () => {
        potionsArray.push("Potion");
        alert('You obtained a potion!');
        console.log(potionsArray);
    
});


let buttonUsePotion = document.getElementById("potion-use");
buttonUsePotion.addEventListener("click", () => {
    if(potionsArray.length < 1 || potionsArray == undefined){
        alert(`You don't have any more potion left to use!`);
    } else {
        alert('You used a potion!');
        potionsArray.pop();
        console.log(potionsArray);
    }
    
});*/

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
    if(cundo.xp >= levelOne && cundo.xp < levelTwo){
        cundo.level = 1;
    }
    if(cundo.xp >= levelTwo && cundo.xp < levelThree){
        cundo.level = 2;
    }
    if(cundo.xp >= levelThree && cundo.xp < levelFour){
        cundo.level = 3;
    }
    if(cundo.xp >= levelFour && cundo.xp < levelFive){
        cundo.level = 4;
    }
    if(cundo.xp >= levelFive){
        cundo.level = 5;
    }

    //Stats
    if(cundo.level == 2){
        cundo.atk = 13;
    }
    if(cundo.level == 3){
        cundo.atk = 14;
    }
    if(cundo.level == 4){
        cundo.atk = 16;
    }
    if(cundo.level == 5){
        cundo.atk = 18;
    }
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
    document.getElementById("one").innerHTML = `
<img src="${cundo.icon}" class="cundo-icon"/>
<h3>Name: ${cundo.name}</h3>
<h3><img src="../assets/img/cundo-level.png"/>${cundo.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/>${cundo.atk}</h3>
<h3>XP: ${cundo.xp}</h3>
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