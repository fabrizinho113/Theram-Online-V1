import {Character} from "./classesAndEnemies.js";


//Audio
let audio = document.getElementById("characterSelectMusic");
audio.volume = 0.1;

let audioIcon = document.getElementById('audioIcon');
audioIcon.innerHTML= `
    <img id="audio" src="../assets/img/sound-icon.png"/>
`;

//Audio Icon change mute
let toggle = false;
function changeImg() {
    if (toggle === true) {
        document.getElementById('audio').src  = '../assets/img/sound-icon.png'; 
    } else {
       document.getElementById('audio').src = '../assets/img/mute-icon.png';
    }
    toggle = !toggle; 
}

//Mute

function toggleMute() {
    let myAudio = document.getElementById('characterSelectMusic');
    myAudio.muted = !myAudio.muted;
 }

audioIcon.addEventListener("click", () => {
    toggleMute();
    changeImg();
});



//Characters

//Cundo

let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, 1, 0,  "../assets/img/pjone.png");

let cundoGold = 30;

document.getElementById("one").innerHTML = `
<img src="${cundo.icon}"  class="cundo-icon"/>
<h3>Name: ${cundo.name}</h3>
<br>
<h3><img src="../assets/img/cundo-level.png"/ id="charCundo" class="icon-level">${cundo.level}</h3>
<h3><img src="../assets/img/cundo-atk-icon.png"/ id="attackCundo" class="icon-atk">${cundo.atk}</h3>
<h3><img src="../assets/img/gold-icon.png"/ id="goldCundo" class="icon-gold"> ${cundoGold}</h3>
<img src="${cundo.spray}"/>
<br>
<button id="cundo" class="btn">Select</button>
`;

//Reyna
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, 1, 0 ,'../assets/img/pjtwo.png');

let reynaGold = 20;

document.getElementById("two").innerHTML = `
    <img src="${reyna.icon}" class="cundo-icon"/>
    <h3>Name: ${reyna.name}</h3>
    <br>
    <h3><img src="../assets/img/reyna-level.png"/ id="charReyna" class="icon-level">${reyna.level}</h3>
    <h3><img src="../assets/img/reyna-atk-icon.png"/ id="attackReyna" class="icon-atk">${reyna.atk}</h3>
    <h3><img src="../assets/img/gold-icon.png"/ id="goldReyna" class="icon-gold"> ${reynaGold}</h3>
    <img src="${reyna.spray}"/>
    <br>
    <button id="reyna" class="btn-two">Select</button>
    `;


//Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, 1, 0, '../assets/img/pjthree.png');

let luluGold = 10;        

document.getElementById("three").innerHTML = `
    <img src="${lulu.icon}" class="cundo-icon" />
    <h3>Name: ${lulu.name}</h3>
    <br>
    <h3><img src="../assets/img/lulu-level.png" id="charLulu" class="icon-level">${lulu.level}</h3>
    <h3><img src="../assets/img/lulu-atk-icon.png"/ id="attackLulu" class="icon-atk">${lulu.atk}</h3>
    <h3><img src="../assets/img/gold-icon.png"/ id="goldLulu" class="icon-gold"> ${luluGold}</h3>
    <img src="${lulu.spray}"/>
    <br>
    <button id="lulu" class="btn-two">Select</button>
    `;


const swalSaveCustomStyle = Swal.mixin({
    customClass: {
        title: 'sweetFont', 
        confirmButton: 'sweetFont',
        denyButton: 'sweetFont',
        cancelButton: 'sweetFont'
    },
    buttonsStyling: true
})


//Select Cundo
function characterOne(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to proceed with Cundo?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* isConfirmed - isDenied */
        if (result.isConfirmed) {
            window.location.href = "../pages/character-cundo.html";
        } else if (result.isDenied) {
            //Nothing
        }
      }) 
}

//Select Reyna
function characterTwo(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to proceed with Reyna?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* isConfirmed - isDenied */
        if (result.isConfirmed) {
            window.location.href = "../pages/character-reyna.html";
        } else if (result.isDenied) {
            //Nothing
        }
      }) 
}

//Select Lulu
function characterThree(){
    swalSaveCustomStyle.fire({
        title: 'Do you want to proceed with Lulu?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* isConfirmed - isDenied */
        if (result.isConfirmed) {
            window.location.href = "../pages/character-lulu.html";
        } else if (result.isDenied) {
            //Nothing
        }
      })
}


//Events

let buttonCundo = document.getElementById("cundo");
buttonCundo.addEventListener("click", characterOne);

let buttonReyna = document.getElementById("reyna");
buttonReyna.addEventListener("click", characterTwo);

let buttonLulu = document.getElementById("lulu");
buttonLulu.addEventListener("click", characterThree);

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// -------------------------------------------------- Fetch ----------------------------------------------------------------- //

fetch("../resources/iconsInfo.JSON")
    .then(response => response.json())
    .then(data => {
    document.getElementById('goldInfo').innerHTML = `
        ${data.gold}
    `;
    document.getElementById('goldInfoTwo').innerHTML = `
        ${data.gold}
    `;
    document.getElementById('goldInfoThree').innerHTML = `
        ${data.gold}
    `;
    document.getElementById('attackInfo').innerHTML = `
        ${data.attack}
    `;
    document.getElementById('attackInfoTwo').innerHTML = `
        ${data.attack}
    `;
    document.getElementById('attackInfoThree').innerHTML = `
        ${data.attack}
    `;
    document.getElementById('levelChar').innerHTML = `
        ${data.level}
    `;
    document.getElementById('levelCharTwo').innerHTML = `
        ${data.level}
    `;
    document.getElementById('levelCharThree').innerHTML = `
        ${data.level}
    `;
}); 

// ------------------------------------------------------------------------------------------------------------------------ //

//Gold Info

function showInfoGold() {
    document.querySelector('#goldInfo').style.display = "flex";
}

function showInfoGoldTwo() {
    document.querySelector('#goldInfoTwo').style.display = "flex";
}

function showInfoGoldThree() {
    document.querySelector('#goldInfoThree').style.display = "flex";
}


function hideInfoGold() {
    document.querySelector('#goldInfo').style.display = "none";
    document.querySelector('#goldInfoTwo').style.display = "none";
    document.querySelector('#goldInfoThree').style.display = "none";
}



document.querySelector("#goldCundo").addEventListener("mouseover",showInfoGold);

document.querySelector("#goldCundo").addEventListener("mouseout", hideInfoGold);

document.querySelector("#goldReyna").addEventListener("mouseover",showInfoGoldTwo);

document.querySelector("#goldReyna").addEventListener("mouseout", hideInfoGold);

document.querySelector("#goldLulu").addEventListener("mouseover",showInfoGoldThree);

document.querySelector("#goldLulu").addEventListener("mouseout", hideInfoGold);
// ------------------------------------------------------------------------------------------------------------------------ //


// ------------------------------------------------------------------------------------------------------------------------ //

//Attack Info

function showInfoAttack() {
    document.querySelector('#attackInfo').style.display = "flex";
}

function showInfoAttackTwo() {
    document.querySelector('#attackInfoTwo').style.display = "flex";
}

function showInfoAttackThree() {
    document.querySelector('#attackInfoThree').style.display = "flex";
}

function hideInfoAttack() {
    document.querySelector('#attackInfo').style.display = "none";
    document.querySelector('#attackInfoTwo').style.display = "none";
    document.querySelector('#attackInfoThree').style.display = "none";
}

document.querySelector("#attackCundo").addEventListener("mouseover",showInfoAttack);

document.querySelector("#attackCundo").addEventListener("mouseout", hideInfoAttack);

document.querySelector("#attackReyna").addEventListener("mouseover",showInfoAttackTwo);

document.querySelector("#attackReyna").addEventListener("mouseout", hideInfoAttack);

document.querySelector("#attackLulu").addEventListener("mouseover",showInfoAttackThree);

document.querySelector("#attackLulu").addEventListener("mouseout", hideInfoAttack);
// ------------------------------------------------------------------------------------------------------------------------ //

// Character Info

function showInfoLevel() {
    document.querySelector('#levelChar').style.display = "flex";
}

function showInfoLevelTwo() {
    document.querySelector('#levelCharTwo').style.display = "flex";
}

function showInfoLevelThree() {
    document.querySelector('#levelCharThree').style.display = "flex";
}

function hideInfoLevel() {
    document.querySelector('#levelChar').style.display = "none";
    document.querySelector('#levelCharTwo').style.display = "none";
    document.querySelector('#levelCharThree').style.display = "none";
}

document.querySelector("#charCundo").addEventListener("mouseover",showInfoLevel);

document.querySelector("#charCundo").addEventListener("mouseout", hideInfoLevel);

document.querySelector("#charReyna").addEventListener("mouseover",showInfoLevelTwo);

document.querySelector("#charReyna").addEventListener("mouseout", hideInfoLevel);

document.querySelector("#charLulu").addEventListener("mouseover",showInfoLevelThree);

document.querySelector("#charLulu").addEventListener("mouseout", hideInfoLevel);

// ------------------------------------------------------------------------------------------------------------------------ //
