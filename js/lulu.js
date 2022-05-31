// Classes
class Character {
    constructor(name, atk){
        this.name = name;
        this.atk = atk;
    }
}

class Enemy{
    constructor(name,atk){
        this.name = name;
        this.atk = atk;
    }
}


  //Lulu
let lulu = new Character("Lulu", 14);
        
document.getElementById("three").innerHTML = `
    <img src="../assets/img/third-character.png"/>
    <h3>Name: ${lulu.name}</h3>
    <br>
    <h3>ATK: ${lulu.atk}</h3>
    <img src="../assets/img/pjthree.png"/>
    <br>
    <button id="lulu"">Select</button>
    `;

console.log(lulu);

function fightLuluSkull(){
    let skull = new Enemy("Skull", 5, 5, 5);
    
    console.log(skull);
    
        
    if(lulu.atk > skull.atk){
        alert('You fight against Skull and won!');
        console.log('You won and if this code works, you deserve ice cream');
    } else if(lulu.atk = skull.atk){
        alert('You fight against Skull and the result was a draw! \n No xp gained');
        console.log('If char.atk > skull.atk then its not working yet lol');
    } else {
         alert('You fight against Skull and lost!');
         console.log('XD');
        }
    }

let buttonSkull = document.getElementById("skull");
buttonSkull.addEventListener("click", fightLuluSkull);

let potionsArray = [];
let lastIndex = false;

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
    
});

console.log(potionsArray);