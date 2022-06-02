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


let cundo = new Character('../assets/img/first-character.png',"Cundo", 11, "../assets/img/pjone.png");


document.getElementById("one").innerHTML = `
<img src="${cundo.icon}"/>
<h3>Name: ${cundo.name}</h3>
<br>
<h3>ATK: ${cundo.atk}</h3>
<img src="${cundo.spray}"/>
<br>
`;

console.log(cundo);

let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 3);

document.getElementById('enemy-one').innerHTML = `
    <img src="${zombie.icon}" class="zombie">
    <h3>ATK: ${zombie.atk}</h3>
    <button id="zombie" class="fight-one">Fight</button>
`;

function fightCundoZombie(){
        
        console.log(zombie);
        if(cundo.atk > zombie.atk){
            alert(`You fight against Skull and won! \n`);
            console.log(cundo);
        } else if(cundo.atk = zombie.atk){
            alert('You fight against Skull and the result was a draw! \n No xp gained');
            console.log('If char.atk > skull.atk then its not working yet lol');
        } else {
             alert('You fight against Skull and lost!');
             console.log('XD');
        }
}




let buttonZombie = document.getElementById("zombie");
buttonZombie.addEventListener("click", fightCundoZombie);


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
