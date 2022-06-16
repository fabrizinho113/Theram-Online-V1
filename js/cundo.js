import {Character, darkKnight, darkLord, skullKing, zombie} from "./classesAndEnemies.js";

//Gold

let gold = 30;

//Cundo
let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, 1, 0,  "../assets/img/pjone.png");

document.getElementById("one").innerHTML = `
<img src="${cundo.icon}" class="cundo-icon"/>
<br>
<h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${cundo.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${cundo.atk}</h3>
<h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${cundo.xp}</h3>
<h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
<br>
`;

console.log(cundo);

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


//Fight Zombie
function fightCundoZombie(){

        console.log(zombie);

        let result = cundo.atk > zombie.atk ? cundo.xp += 15 : cundo.xp += 0; 
        result ? gold += 10 : gold += 0;
        xpSystem(result);
}

//Fight Dark Knight
function fightCundoDarkKnight(){

    console.log(darkKnight);

    let result = cundo.atk > darkKnight.atk ? (cundo.xp += 25 && (gold += 20)) : (cundo.xp += 0 && (gold += 0)); 
    xpSystem(result);
}

//Fight Dark Lord
function fightCundoDarkLord(){

    console.log(darkLord);

    let result = cundo.atk > darkLord.atk ? (cundo.xp += 35 && (gold += 30)) : (cundo.xp += 0 && (gold += 0));
    xpSystem(result);
}

//Fight Skull King
/*
function fightCundoSkullKing(){

    console.log(skullKing);

    let result = cundo.atk > skullKing.atk ? (cundo.xp += 50 && (gold += 40)) : (cundo.xp += 0 && (gold += 0));
    xpSystem(result);
}
*/

//Zombie Button
let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    musicFightPlay();
    fightCundoZombie();
    popupFightZombie();
    closePopupZombie();
});

//Dark Knight Button
let buttonDarkKnight = document.getElementById("darkKnight");
buttonDarkKnight.addEventListener("click", () => {
    musicFightPlay();
    fightCundoDarkKnight();
    popupFightDarkKnight();
    closePopupDarkKnight();
});

//Dark Lord Button
let buttonDarkLord = document.getElementById("darkLord");
buttonDarkLord.addEventListener("click", () => {
    musicFightPlay();
    fightCundoDarkLord();
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
<img src="${cundo.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie" class="zombie-character">
`;

//Dark Knight
document.getElementById('modal-dark-knight').innerHTML = `
<img src="../assets/img/close.png" class="close-two" >
<img src="${cundo.spray}" id="character-one" alt="Cundo" class="cundo-character">
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

// 



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

}
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Refresh stats on DOM

setInterval(() => {
   
document.getElementById("one").innerHTML = `
<img src="${cundo.icon}" class="cundo-icon"/>
<br>
<h3><img src="../assets/img/cundo-level.png"/ class="icon-level">${cundo.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/ class="icon-atk">${cundo.atk}</h3>
<h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${cundo.xp}</h3>
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

function saveGameCundo(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to save your progress?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        localStorage.setItem("char", JSON.stringify(cundo));
        swalSaveCustomStyle.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
        swalSaveCustomStyle.fire(`You didn't save`, '', 'info');
        }
      })
    
}


//Load
function loadGameCundo(){
    cundo = JSON.parse(localStorage.getItem("char"));
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
save.addEventListener("click", saveGameCundo);

let load = document.getElementById('load');
load.addEventListener("click", loadGameCundo);

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

function itemAtkCundo(){
    if(cundo.level >= 2 && gold >= 100){
        gold >= 100 ? cundo.atk += 1  : cundo.atk += 0;
        gold ? gold -= 100 : gold -= 0;
    }
}

document.getElementById('itemOne').addEventListener("click", itemAtkCundo);

