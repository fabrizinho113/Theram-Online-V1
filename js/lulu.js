import {Character, darkKnight, darkLord, skullKing, zombie} from "./classesAndEnemies.js";

let gold = 10;

  //Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, 1, 0, '../assets/img/pjthree.png');

        
document.getElementById("three").innerHTML = `
<img src="${lulu.icon}" class="cundo-icon"/>
<br>
<h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${lulu.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${lulu.atk}</h3>
<h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${lulu.xp}</h3>
<h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
<br>
`;

console.log(lulu);


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
function fightLuluZombie(){
        console.log(zombie);
    
        let resultado = lulu.atk > zombie.atk ? lulu.xp += 25 : lulu.xp += 0; 
        resultado ? gold += 10 : gold += 0;
        xpSystem(resultado);
    }

//Fight Dark Knight
function fightLuluDarkKnight(){

    console.log(darkKnight);

    let result = lulu.atk > darkKnight.atk ? (lulu.xp += 25 && (gold += 20)) : (lulu.xp += 0 && (gold += 0)); 
    xpSystem(result);
}

//Fight Dark Lord
function fightLuluDarkLord(){

    console.log(darkLord);

    let result = lulu.atk > darkLord.atk ? (lulu.xp += 35 && (gold += 30)) : (lulu.xp += 0 && (gold += 0));
    xpSystem(result);
}

//Fight Skull King
/*
function fightReynaSkullKing(){

    console.log(skullKing);

    let result = lulu.atk > skullKing.atk ? lulu.xp += 50 : cundo.xp += 0; 
    result ? gold += 40 : gold += 0;
    xpSystem(result);
}*/


//Zombie Button
let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    musicFightPlay();
    fightLuluZombie();
    popupFightZombie();
    closePopupZombie();
});

//Dark Knight Button
let buttonDarkKnight = document.getElementById("darkKnight");
buttonDarkKnight.addEventListener("click", () => {
    musicFightPlay();
    fightLuluDarkKnight();
    popupFightDarkKnight();
    closePopupDarkKnight();
});

//Dark Lord Button
let buttonDarkLord = document.getElementById("darkLord");
buttonDarkLord.addEventListener("click", () => {
    musicFightPlay();
    fightLuluDarkLord();
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
<img src="${lulu.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie" class="zombie-character">
`;

//Dark Knight
document.getElementById('modal-dark-knight').innerHTML = `
<img src="../assets/img/close.png" class="close-two" >
<img src="${lulu.spray}" id="character-one" alt="Cundo" class="cundo-character">
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

}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
    document.getElementById("three").innerHTML = `
    <img src="${lulu.icon}" class="cundo-icon"/>
    <br>
    <h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${lulu.level}</h3>
    <h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${lulu.atk}</h3>
    <h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${lulu.xp}</h3>
    <h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
    <br>
`;
 }, 1000)

 // ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Save / Load progress

//Save / Load progress

//Save
const swalSaveCustomStyle = Swal.mixin({
    customClass: {
        title: 'sweetFont',
    },
    buttonsStyling: true
})

function saveGameLulu(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to save your progress?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        localStorage.setItem("char-three", JSON.stringify(lulu));
        swalSaveCustomStyle.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
        swalSaveCustomStyle.fire(`You didn't save`, '', 'info');
        }
      })
    
}


//Load
function loadGameLulu(){
    lulu = JSON.parse(localStorage.getItem("char-three"));
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
save.addEventListener("click", saveGameLulu);

let load = document.getElementById('load');
load.addEventListener("click", loadGameLulu);

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

function itemAtkLulu(){
    if(lulu.level >= 2 && gold >= 100){
        gold >= 100 ? lulu.atk += 1  : lulu.atk += 0;
        gold ? gold -= 100 : gold -= 0;
    }
}

document.getElementById('itemOne').addEventListener("click", itemAtkLulu);
