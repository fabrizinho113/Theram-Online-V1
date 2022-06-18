import {Character, darkKnight, darkLord, skullKing, zombie} from "./classesAndEnemies.js";

//Gold
let gold = 20;

//Reyna
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, 1, 0 ,'../assets/img/pjtwo.png');
    
document.getElementById("two").innerHTML = `
<img src="${reyna.icon}" class="cundo-icon"/>
<br>
<h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${reyna.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${reyna.atk}</h3>
<h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${reyna.xp}</h3>
<h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
<br>
`;

console.log(reyna);
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Battle Music 
let battleMusic = new Audio("../assets/music/FF7-battle-theme-8bits.mp3");
battleMusic.volume = 0.1;

function musicFightPlay() {
    battleMusic.play();
}

function musicFightStop() {
    battleMusic.pause();
    battleMusic.currentTime = 0;
}

//Shop Music 
let shopMusic = new Audio("../assets/music/shop-music.mp3");
shopMusic.volume = 0.1;

function musicShopPlay() {
    shopMusic.play();
}

function musicShopStop() {
    shopMusic.pause();
    shopMusic.currentTime = 0;
}



// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
//Zombie

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;

//Dark Knight

document.getElementById('enemy-two').innerHTML = `
    <img src="${darkKnight.icon}" class="zombie">
    <h3>ATK: ${darkKnight.atk}</h3>
    <button id="darkKnight" class="fight-two">Fight</button>
`;

//Dark Lord

document.getElementById('enemy-three').innerHTML = `
    <img src="${darkLord.icon}" class="zombie">
    <h3>ATK: ${darkLord.atk}</h3>
    <button id="darkLord" class="fight-three">Fight</button>
`;

//Skull King

document.getElementById('enemy-four').innerHTML = `
    <img src="${skullKing.icon}" class="zombie">
    <h3>ATK: ${skullKing.atk}</h3>
    <button id="skullKing" class="fight-four">Fight</button>
`;

//Zombie Fight
function fightReynaZombie(){
        console.log(zombie);
    
        let resultado = reyna.atk > zombie.atk ? reyna.xp += 25 : reyna.xp += 0; 
        resultado ? gold += 10 : gold += 0;
        xpSystem(resultado);
    }

//Fight Dark Knight
function fightReynaDarkKnight(){

    console.log(darkKnight);

    let result = reyna.atk > darkKnight.atk ? (reyna.xp += 25 && (gold += 20)) : (reyna.xp += 0 && (gold += 0)); 
    xpSystem(result);
}

//Fight Dark Lord
function fightReynaDarkLord(){

    console.log(darkLord);

    let result = reyna.atk > darkLord.atk ? (reyna.xp += 35 && (gold += 30)) : (reyna.xp += 0 && (gold += 0));
    xpSystem(result);
}

//Fight Skull King
/*
function fightReynaSkullKing(){

    console.log(skullKing);

    let result = cundo.atk > skullKing.atk ? cundo.xp += 50 : cundo.xp += 0; 
    result ? gold += 40 : gold += 0;
    xpSystem(result);
}*/


//Zombie Button
let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    musicFightPlay();
    fightReynaZombie();
    popupFightZombie();
    closePopupZombie();
});

//Dark Knight Button
let buttonDarkKnight = document.getElementById("darkKnight");
buttonDarkKnight.addEventListener("click", () => {
    musicFightPlay();
    fightReynaDarkKnight();
    popupFightDarkKnight();
    closePopupDarkKnight();
});

//Dark Lord Button
let buttonDarkLord = document.getElementById("darkLord");
buttonDarkLord.addEventListener("click", () => {
    musicFightPlay();
    fightReynaDarkLord();
    popupFightDarkKnight();
    closePopupDarkKnight();
});
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Popups

//Zombie
document.getElementById('modal-zombie').innerHTML = `
<img src="../assets/img/close.png" class="close" >
<img src="${reyna.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie" class="zombie-character">
`;

//Dark Knight
document.getElementById('modal-dark-knight').innerHTML = `
<img src="../assets/img/close.png" class="close-two" >
<img src="${reyna.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/dark-knight-character.png" alt="DarkKnight" class="dark-knight-character">
`;

/*
//Dark Lord
document.getElementById('modal-dark-lord').innerHTML = `
<img src="../assets/img/close.png" class="close-two" >
<img src="${cundo.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/dark-lord-character.png" alt="DarkLord" class="dark-lord-character">
`;*/



function popupFightZombie(){
    document.querySelector('.bg-modal-zombie').style.display = "flex";
}

function popupFightDarkKnight(){
    document.querySelector('.bg-modal-darkKnight').style.display = "flex";
}



//Close Popups
function closePopupZombie(){
    let close = document.querySelector('.close');
    close.addEventListener("click", () => {
    musicFightStop();
    document.querySelector('.bg-modal-zombie').style.display = "none";
    //document.querySelector('.bg-modal-darkKnight').style.display = "none";
    });
}

function closePopupDarkKnight(){
    let close = document.querySelector('.close-two');
    close.addEventListener("click", () => {
    musicFightStop();
    //document.querySelector('.bg-modal-zombie').style.display = "none";
    document.querySelector('.bg-modal-darkKnight').style.display = "none";
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

}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
    document.getElementById("two").innerHTML = `
    <img src="${reyna.icon}" class="cundo-icon"/>
    <h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${reyna.level}</h3>
    <h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${reyna.atk}</h3>
    <h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${reyna.xp}</h3>
    <h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
    <br>
    `;
 }, 1000)

 // ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Save / Load progress

//Save
const swalSaveCustomStyle = Swal.mixin({
    customClass: {
        title: 'sweetFont',
    },
    buttonsStyling: true
})

function saveGameReyna(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to save your progress?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        localStorage.setItem("char-two", JSON.stringify(reyna));
        swalSaveCustomStyle.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
        swalSaveCustomStyle.fire(`You didn't save`, '', 'info');
        }
      })
    
}


//Load
function loadGameReyna(){
    reyna = JSON.parse(localStorage.getItem("char-two"));
    swalSaveCustomStyle.fire({
        position: 'center',
        width: 400,
        icon: 'success',
        title: 'Your character loaded correctly!',
        showConfirmButton: false,
        timer: 1500
      })
}

let save = document.getElementById('save');
save.addEventListener("click", saveGameReyna);

let load = document.getElementById('load');
load.addEventListener("click", loadGameReyna);

 // ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Shop

let shopMenu = document.getElementById('shop');
shopMenu.addEventListener('click', () =>{
    musicShopPlay();
    popupShop();
    closePopupShop();
})

function popupShop(){
    document.querySelector('.bg-shop').style.display = "flex";
}

//Close
function closePopupShop(){
    let close = document.querySelector('.close-shop');
    close.addEventListener("click", () => {
    musicShopStop();
    document.querySelector('.bg-shop').style.display = "none";
    });
}

document.getElementById('modal-shop').innerHTML = `
<img src="../assets/img/close.png" class="close-shop">
<button id="itemOne">Buy Sword</button>
<button id="itemTwo">Buy Sword</button>
<button id="itemThree">Buy Sword</button>
`;

function itemAtkReyna(){
    if(reyna.level >= 2 && gold >= 100){
        gold >= 100 ? reyna.atk += 1  : reyna.atk += 0;
        gold ? gold -= 100 : gold -= 0;
    }
}

document.getElementById('itemOne').addEventListener("click", itemAtkReyna);