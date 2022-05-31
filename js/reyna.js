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

//Reyna
let reyna = new Character("Reyna", 10);
let reynaContainer = document.getElementById("two");
    
reynaContainer.innerHTML = `
    <img src="../assets/img/second-character.png"/>
    <h3>Name: ${reyna.name}</h3>
    <br>
    <h3>ATK: ${reyna.atk}</h3>
    <img src="../assets/img/pjtwo.png"/>
    <br>
    <button id="reyna">Select</button>
    `;
console.log(reyna);

function fightReynaSkull(){
        let skull = new Enemy("Skull", 5, 5, 5);
    
        console.log(skull);
    
        
        if(reyna.atk > skull.atk){
            alert('You fight against Skull and won!');
            console.log('You won and if this code works, you deserve ice cream');
        } else if(reyna.atk = skull.atk){
            alert('You fight against Skull and the result was a draw! \n No xp gained');
            console.log('If char.atk > skull.atk then its not working yet lol');
        } else {
             alert('You fight against Skull and lost!');
             console.log('XD');
        }
    }

let buttonSkull = document.getElementById("skull");
buttonSkull.addEventListener("click", fightReynaSkull);

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