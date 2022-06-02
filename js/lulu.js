// Classes
class Character {
    constructor(icon, name, atk, spray){
        this.icon = icon;
        this.name = name;
        this.atk = atk;
        this.spray = spray;
    }
}

class Enemy{
    constructor(icon, name,atk){
        this.icon = icon;
        this.name = name;
        this.atk = atk;
    }
}


  //Lulu
let lulu = new Character('../assets/img/third-character.png',"Lulu", 14, '../assets/img/pjthree.png');
        
document.getElementById("three").innerHTML = `
    <img src="${lulu.icon}"/>
    <h3>Name: ${lulu.name}</h3>
    <br>
    <h3>ATK: ${lulu.atk}</h3>
    <img src="${lulu.spray}"/>
    <br>
    `;

console.log(lulu);


let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 3);

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;


function fightLuluZombie(){
    console.log(zombie);
     
    if(lulu.atk > zombie.atk){
        alert('You fight against Skull and won!');
        console.log('You won and if this code works, you deserve ice cream');
    } else if(lulu.atk = zombie.atk){
        alert('You fight against Skull and the result was a draw! \n No xp gained');
        console.log('If char.atk > skull.atk then its not working yet lol');
    } else {
         alert('You fight against Skull and lost!');
         console.log('XD');
        }
    }

let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", fightLuluZombie);

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