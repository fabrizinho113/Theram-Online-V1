document.addEventListener("DOMContentLoaded", function () {

class Character {
    constructor(icon, name, atk, spray){
        this.icon = icon;
        this.name = name;
        this.atk = atk;
        this.spray = spray;
    }
}


//Personajes

//Cundo

let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, "../assets/img/pjone.png");


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
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, '../assets/img/pjtwo.png');
    
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
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14,'../assets/img/pjthree.png');
        
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

/*
let buttonSkull = document.getElementById("skull");
buttonSkull.addEventListener("click", fightCundoSkull);

const itemCollection = new ItemModelCollection();
document.getElementById('addItem').onclick = (e) => {
  const id = itemCollection.items.length; // obviously figure out a better id generator
  itemCollection.addItem(id, `Item Number ${id}`);
  console.log(itemCollection);
};
*/

/*

let active;

function characterSelect(){
    if(document.getElementById("btn-one")){
        alert('You picked Cundo');
        active = 1;
        console.log(active);
        window.location.href = "../pages/map.html";
    }

    if(document.getElementById("btn-two")){
        character = new Personaje("Reyna", "Female", "Paladin", 10, 10, 10, 0);
        alert('You picked Reyna');
        active = 2;
        console.log(active);
        window.location.href = "../pages/map.html";
    }

    if(document.getElementById("btn-two")){
        character = new Personaje("Lulu", "Female", "Mage", 8, 14, 8, 0);
        alert('You picked Lulu');
        active = 3;
        console.log(active);
        window.location.href = "../pages/map.html";
    }

}*/

/*

let buttonOne = document.getElementById("btn-one");
buttonOne.addEventListener("click", characterCundo);

let buttonTwo = document.getElementById("btn-two");
buttonTwo.addEventListener("click", characterReyna);

let buttonThree = document.getElementById("btn-three");
buttonThree.addEventListener("click", characterLulu);

console.log(active);

let buttonSkull = document.getElementById("skull");
buttonSkull.addEventListener("click", fightSkull)


function fightSkull(){
    let skull = new Enemigo("Skull", 5, 5, 5);
    console.log(skull);

    
    if(character.atk > skull.atk){
        alert('You fight against Skull and won! \n 19 xp won');
        character.xp += 19;
        console.log('You won and if this code works, you deserve ice cream');
        console.log(character);
    } else if(character.atk = skull.atk){
        alert('You fight against Skull and the result was a draw! \n No xp gained');
        console.log('If char.atk > skull.atk then its not working yet lol');
    } else {
         alert('You fight against Skull and lost!');
         console.log('XD');
    }
}

*/

/*



let skull = document.getElementById("skull");
skull.onclick = () =>{ 
    skull = new Enemigo("Skull", 5, 5, 5);
    console.log(skull);
    
    if(personaje.atk > skull.atk){
        alert('Peleaste contra un Skull y ganaste! \n Recibiste 19 puntos de experiencia');
        personaje.xp += 19;
        console.log('Ganaste pa, ya funca el codigo. Si recibe XP el pj GOOOOOOOD');
        console.log(personaje);
    } else if(personaje.atk = skull.atk){
        alert('Peleaste contra un Skull y hubo empate! \n No recibes experiencia');
        console.log('No funca si es mayor el atk');
    } else {
         alert('Peleaste contra un Skull y perdiste!');
         console.log('XD');
    }
}
*/

}, false);
