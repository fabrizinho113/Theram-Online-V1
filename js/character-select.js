import {Character} from "./classesAndEnemies.js";


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
<button id="cundo" class="btn">Select</button>
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
    <button id="reyna" class="btn-two">Select</button>
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
    <button id="lulu" class="btn-two">Select</button>
    `;

console.log(lulu);

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




