import {Character, darkKnight, darkLord, skullKing, zombie} from "./classesAndEnemies.js";

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -----------------------------------  Character Setup --------------------------------------------------------- //

//Gold
let gold = 10;

//Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, 1, 0, '../assets/img/pjthree.png');

//Display DOM
document.getElementById("three").innerHTML = `
<img src="${lulu.icon}" class="cundo-icon"/>
<br>
<h3><img src="../assets/img/lulu-level.png"/ class="icon-level">${lulu.level}</h3>
<h3><img src="../assets/img/lulu-atk-icon.png"/ class="icon-atk">${lulu.atk}</h3>
<h3><img src="../assets/img/exp-icon.png"/ class="icon-xp">${lulu.xp}</h3>
<h3><img src="../assets/img/gold-icon.png"/ class="icon-gold"> ${gold}</h3>
<br>
`;

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -----------------------------------  Battle Music --------------------------------------------------------- //

//Victory
let victoryMusic = new Audio("../assets/music/Victory-8bit.mp3");
victoryMusic.volume = 0.1;

function musicVictoryPlay() {
    victoryMusic.play();
}

function musicVictoryStop() {
    victoryMusic.pause();
    victoryMusic.currentTime = 0;
}

//Defeat
let defeatMusic = new Audio('../assets/music/Defeat-theme.mp3');
defeatMusic.volume = 0.1

function musicDefeatPlay() {
    defeatMusic.play();
}

function musicDefeatStop() {
    defeatMusic.pause();
    defeatMusic.currentTime = 0;
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

// -----------------------------------  Display enemies DOM --------------------------------------------------------- //

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
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -----------------------------------  Fight functions --------------------------------------------------------- //

let result;

//Fight Zombie
function fightLuluZombie(){
    result = lulu.atk > zombie.atk ? zombieWin() : zombieLose();
    xpSystem(result);
    
}

//Fight Dark Knight
function fightLuluDarkKnight(){
    result = lulu.atk > darkKnight.atk ? darkKnightWin() : darkKnightLose();
    xpSystem(result); 
}

//Fight Dark Lord
function fightLuluDarkLord(){
    result = lulu.atk > darkLord.atk ? darkLordWin() : darkLordLose();
    xpSystem(result);
}

//Fight Skull King

function fightLuluSkullKing(){
    result = lulu.atk > skullKing.atk ? skullKingWin() : skullKingLose();
    xpSystem(result);
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -----------------------------------  Buttons from enemies (events) --------------------------------------------------------- //

//Zombie Button
let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    fightLuluZombie();
    popupFightZombie();
    closePopupZombie();
});

//Dark Knight Button
let buttonDarkKnight = document.getElementById("darkKnight");
buttonDarkKnight.addEventListener("click", () => {
    fightLuluDarkKnight();
    popupFightDarkKnight();
    closePopupDarkKnight();
});

//Dark Lord Button
let buttonDarkLord = document.getElementById("darkLord");
buttonDarkLord.addEventListener("click", () => {
    fightLuluDarkLord();
    popupFightDarkLord();
    closePopupDarkLord();
});

//Skull King Button
let buttonSkullKing = document.getElementById("skullKing");
buttonSkullKing.addEventListener("click", () => {
    fightLuluSkullKing();
    popupFightSkullKing();
    closePopupSkullKing();
});

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -----------------------------------  Popups/Modals (currently static) --------------------------------------------------------- //

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


//Dark Lord
document.getElementById('modal-dark-lord').innerHTML = `
<img src="../assets/img/close.png" class="close-three" >
<img src="${lulu.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/dark-lord-character.png" alt="DarkLord" class="dark-lord-character">
`;

//Skull King
document.getElementById('modal-skull-king').innerHTML = `
<img src="../assets/img/close.png" class="close-four" >
<img src="${lulu.spray}" id="character-one" alt="Cundo" class="cundo-character">
<img src="../assets/img/skull-king-character.png" alt="skullKing" class="skull-king-character">
`;

// -----------------------------------  Popups/Modals Functions --------------------------------------------------------- //

async function popupFightZombie(){
    await delay(speed);
    document.querySelector('.bg-modal-zombie').style.display = "flex";
}

async function popupFightDarkKnight(){
    await delay(speed);
    document.querySelector('.bg-modal-darkKnight').style.display = "flex";
}

async function popupFightDarkLord(){
    await delay(speed);
    document.querySelector('.bg-modal-darkLord').style.display = "flex";
}

async function popupFightSkullKing(){
    await delay(speed);
    document.querySelector('.bg-modal-skullKing').style.display = "flex";
}


//Close Popups
function closePopupZombie(){
    let close = document.querySelector('.close');
    close.addEventListener("click", () => {
    musicVictoryStop();
    musicDefeatStop();
    document.querySelector('.bg-modal-zombie').style.display = "none";
    clearInterval(refreshInterval);
    });
}

function closePopupDarkKnight(){
    let close = document.querySelector('.close-two');
    close.addEventListener("click", () => {
    musicVictoryStop();
    musicDefeatStop();
    document.querySelector('.bg-modal-darkKnight').style.display = "none";
    clearInterval(refreshInterval);
    });
}

function closePopupDarkLord(){
    let close = document.querySelector('.close-three');
    close.addEventListener("click", () => {
    musicVictoryStop();
    musicDefeatStop();
    document.querySelector('.bg-modal-darkLord').style.display = "none";
    clearInterval(refreshInterval);
    });
}

function closePopupSkullKing(){
    let close = document.querySelector('.close-four');
    close.addEventListener("click", () => {
    musicVictoryStop();
    musicDefeatStop();
    document.querySelector('.bg-modal-skullKing').style.display = "none";
    clearInterval(refreshInterval);
    });
}


// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //


let refreshInterval;

// Win / Lose fights

// -----------------------------------  Zombie --------------------------------------------------------- //

// Zombie Win
async function zombieWin(){
    await delay(speed);
    musicVictoryPlay();
    swalSaveCustomStyle.fire({
        title: 'You Won!',
        text: 'You earned:  15 XP and 10 Gold',
        imageUrl: '../assets/img/Lulu-Win.png',
        imageWidth: 50,
        imageHeight: 70,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
    }, 1000);

         lulu.xp += 15;
         gold += 10;
      
}

// Zombie Lose
async function zombieLose(){
    await delay(speed);
    musicDefeatPlay();
    swalSaveCustomStyle.fire({
        title: 'You lost!',
        text: 'You earned:  0 XP and 0 Gold',
        imageUrl: '../assets/img/Lulu-Lose.png',
        imageWidth: 70,
        imageHeight: 50,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {
        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);
        lulu.xp += 0;
        gold += 0;
      
}

// -----------------------------------  Dark Knight --------------------------------------------------------- //

// Dark Knight Win
async function darkKnightWin(){
    await delay(speed);
    musicVictoryPlay();
    swalSaveCustomStyle.fire({
        title: 'You Won!',
        text: 'You earned:  25 XP and 20 Gold',
        imageUrl: '../assets/img/Lulu-Win.png',
        imageWidth: 50,
        imageHeight: 70,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${cundo.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${cundo.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${cundo.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 25;
         gold += 20;
      
}

// Dark Knight Lose
async function darkKnightLose(){
    await delay(speed);
    musicDefeatPlay();
    swalSaveCustomStyle.fire({
        title: 'You Lost!',
        text: 'You earned:  0 XP and 0 Gold',
        imageUrl: '../assets/img/Lulu-Lose.png',
        imageWidth: 70,
        imageHeight: 50,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 0;
         gold += 0;
      
}

// -----------------------------------  Dark Lord --------------------------------------------------------- //

// Dark Lord Win
async function darkLordWin(){
    await delay(speed);
    musicVictoryPlay();
    swalSaveCustomStyle.fire({
        title: 'You Won!',
        text: 'You earned:  40 XP and 30 Gold',
        imageUrl: '../assets/img/Lulu-Win.png',
        imageWidth: 50,
        imageHeight: 70,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 40;
         gold += 30;
      
}

// Dark King Lose
async function darkLordLose(){
    await delay(speed);
    musicDefeatPlay();
    swalSaveCustomStyle.fire({
        title: 'You lost!',
        text: 'You earned:  0 XP and 0 Gold',
        imageUrl: '../assets/img/Lulu-Lose.png',
        imageWidth: 70,
        imageHeight: 50,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}" class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/  id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 0;
         gold += 0;
      
}

// -----------------------------------  Skull King --------------------------------------------------------- //

// Skull King Win
async function skullKingWin(){
    await delay(speed);
    musicVictoryPlay();
    swalSaveCustomStyle.fire({
        title: 'You Won!',
        text: 'You earned:  50 XP and 50 Gold',
        imageUrl: '../assets/img/Lulu-Win.png',
        imageWidth: 50,
        imageHeight: 70,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 50;
         gold += 50;
      
}

// Skull King Lose
async function skullKingLose(){
    await delay(speed);
    musicDefeatPlay();
    swalSaveCustomStyle.fire({
        title: 'You lost!',
        text: 'You earned:  0 XP and 0 Gold',
        imageUrl: '../assets/img/Lulu-Lose.png',
        imageWidth: 70,
        imageHeight: 50,
        imageAlt: 'Custom image',
      })
      refreshInterval = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}"  class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;
         }, 1000);

         lulu.xp += 0;
         gold += 0;
      
}

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //


//Xp System
//Levels

let levelOne = 0;
let levelTwo = 90;
let levelThree = 190;
let levelFour = 390;
let levelFive = 590;

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

// Delay / Backend "Simulator"

let speed = 1500;

function delay(ms) {
    return new Promise((response) => setTimeout(response, ms))
}


 // ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

//Save / Load progress

//Save
const swalSaveCustomStyle = Swal.mixin({
    customClass: {
        title: 'sweetFont', 
        confirmButton: 'sweetFont',
        text:'sweetFont',
        denyButton: 'sweetFont',
        cancelButton: 'sweetFont'
    },
    buttonsStyling: true
})

let timerInterval;

function saveGameLulu(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to save your progress?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* isConfirmed - isDenied */     
        if (result.isConfirmed){
            swalSaveCustomStyle.fire({
                title: 'Saving...',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                willClose: () => {
                    clearInterval(timerInterval);
                    swalSaveCustomStyle.fire('Saved!', '', 'success');
                    localStorage.setItem("char-three", JSON.stringify(lulu));
                    localStorage.setItem("goldThree", JSON.stringify(gold));
                }
              })
              

        } else if (result.isDenied) {
        swalSaveCustomStyle.fire(`You didn't save`, '', 'info');
        }
      })
    
}


let refreshIntervalLoad;

//Load
function loadGameLulu(){
    
    swalSaveCustomStyle.fire({
        position: 'center',
        width: 400,
        icon: 'success',
        title: 'Your character loaded correctly!',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      });
      lulu = JSON.parse(localStorage.getItem("char-three"));
      gold = JSON.parse(localStorage.getItem("goldThree"));
        refreshIntervalLoad = setInterval(() => {

        document.getElementById("three").innerHTML = `
        <img src="${lulu.icon}" class="cundo-icon"/>
        <br>
        <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
        <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
        <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
        <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
        <br>
        
        `;

        clearInterval(refreshIntervalLoad);
         }, 1000);
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
<div class="itemsShop">
<div class="swordOne"><img class="sword" src="../assets/img/staffOne.png"/><p class="shopStat">ATK +1 (Available at level 2)</p><p class="shopStat">100 Gold</p><p class="shopStat">Unlimited Stock</p><button id="itemOne">Buy Staff</button></div>
<div class="swordTwo"><img class="sword" src="../assets/img/staffTwo.png"/><p class="shopStat">ATK +2 (Available at level 3)</p><p class="shopStat">200 Gold</p><p class="shopStat">Unlimited Stock</p><button id="itemTwo">Buy Staff</button></div>
<div class="swordThree"><img class="sword" src="../assets/img/staffThree.png"/><p class="shopStat">ATK +4 (Available at level 4)</p><p class="shopStat">400 Gold</p><p class="shopStat">Unlimited Stock</p><button id="itemThree">Buy Staff</button></div>
</div>

`;

function itemAtkLulu(){
    if(lulu.level >= 2 && gold >= 100){
        gold >= 100 && purchaseComplete();
        setInterval(() => {

            document.getElementById("three").innerHTML = `
            <img src="${lulu.icon}" class="cundo-icon"/>
            <br>
            <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
            <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
            <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
            <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
            <br>
            
            `;
    
            clearInterval();
             }, 1000);
    } else {
        purchaseFail();
    }

    function purchaseComplete(){
        swalSaveCustomStyle.fire(
            'Purchase complete!',
            '',
            'success'
        )
        gold -= 100;
        lulu.atk += 1;
    }

    function purchaseFail(){
        swalSaveCustomStyle.fire(
            'Not enough gold or level',
            '',
            'error'
          )
        
    }
}

function itemAtkTwoLulu(){
    if(lulu.level >= 3 && gold >= 200){
        gold >= 200 &&  purchaseComplete();

        setInterval(() => {

            document.getElementById("three").innerHTML = `
            <img src="${lulu.icon}" class="cundo-icon"/>
            <br>
            <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
            <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
            <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
            <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
            <br>
            
            `;
    
            clearInterval();
             }, 1000);
    } else {
        purchaseFail();
    }

    function purchaseComplete(){
        swalSaveCustomStyle.fire(
            'Purchase complete!',
            '',
            'success'
        )
        gold -= 200;
        lulu.atk += 2;
    }

    function purchaseFail(){
        swalSaveCustomStyle.fire(
            'Not enough gold or level',
            '',
            'error'
          )
        
    }
}

function itemAtkThreeLulu(){
    if(lulu.level >= 4 && gold >= 400){
        gold >= 400 && purchaseComplete();

        setInterval(() => {

            document.getElementById("three").innerHTML = `
            <img src="${lulu.icon}" class="cundo-icon"/>
            <br>
            <h3><img src="../assets/img/lulu-level.png"/ id="char" class="icon-level">${lulu.level}</h3>
            <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attack" class="icon-atk">${lulu.atk}</h3>
            <h3><img src="../assets/img/exp-icon.png"/ id="exp" class="icon-xp">${lulu.xp}</h3>
            <h3><img src="../assets/img/gold-icon.png"/ id="gold" class="icon-gold"> ${gold}</h3>
            <br>
            
            `;
    
            clearInterval();
             }, 1000);
    } else {
        purchaseFail();
    }

    function purchaseComplete(){
        swalSaveCustomStyle.fire(
            'Purchase complete!',
            '',
            'success'
        )
        gold -= 400;
        lulu.atk += 4;
    }

    function purchaseFail(){
        swalSaveCustomStyle.fire(
            'Not enough gold or level',
            '',
            'error'
          )
        
    }
}

document.getElementById('itemOne').addEventListener("click", itemAtkLulu);
document.getElementById('itemTwo').addEventListener("click", itemAtkTwoLulu);
document.getElementById('itemThree').addEventListener("click", itemAtkThreeLulu);


// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -------------------------------------------------- Fetch ----------------------------------------------------------------- //

fetch("../resources/iconsInfo.JSON")
    .then(response => response.json())
    .then(data => {
    document.getElementById('shopInfo').innerHTML = `
        ${data.shop}
    `;
}); 


// ------------------------------------------------------------------------------------------------------------------------ //

// Shop Info

function showInfoShop() {
    document.querySelector('#shopInfo').style.display = "flex";
}

function hideInfoShop() {
    document.querySelector('#shopInfo').style.display = "none";
}

document.querySelector("#shop").addEventListener("mouseover",showInfoShop);

document.querySelector("#shop").addEventListener("mouseout", hideInfoShop);
