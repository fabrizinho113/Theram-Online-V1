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

//Reyna
let reyna = new Character('../assets/img/second-character.png',"Reyna", 10, '../assets/img/pjtwo.png');
let reynaContainer = document.getElementById("two");
    
reynaContainer.innerHTML = `
    <img src="${reyna.icon}"/>
    <h3>Name: ${reyna.name}</h3>
    <br>
    <h3>ATK: ${reyna.atk}</h3>
    <img src="${reyna.spray}"/>
    <br>
    `;
console.log(reyna);

//Zombie
let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 3);

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;

//Zombie Fight
function fightReynaZombie(){
        console.log(zombie);
    
        
        if(reyna.atk > zombie.atk){
            console.log('You won and if this code works, you deserve ice cream');
        } else if(reyna.atk = zombie.atk){
            alert('You fight against Skull and the result was a draw!');
            console.log('If char.atk > skull.atk then its not working yet lol');
        } else {
             alert('You fight against Skull and lost!');
             console.log('XD');
        }
    }

//Popup

document.getElementById('modal').innerHTML = `
<img src="../assets/img/close.png" class="close" >
<img src="${reyna.spray}" alt="Cundo" class="cundo-character">
<img src="../assets/img/zombie-character.png" alt="Zombie">
`;

function popup(){
    document.querySelector('.bg-modal').style.display = "flex";
}


//Close Popup
function close(){
    let close = document.querySelector('.close');
    close.addEventListener("click", () => {
    document.querySelector('.bg-modal').style.display = "none";
    });
}

let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", () => {
    fightReynaZombie();
    popup();
    close();
});

//Potions
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

//Xp System?

/*
if(cundo.xp = 100){
    cundo.atk += 1;
    alert('Congratulations, you leveled up! \n HP: +1 \n ATK: + 1');
} else if (cundo.xp = 200) {
    cundo.atk += 1;
    alert('Congratulations, you leveled up! \n HP: +1 \n ATK: + 1');

let level;
let levelTwo;
}*/
