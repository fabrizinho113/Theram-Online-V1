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


let cundo = new Character("Cundo", 10);


document.getElementById("one").innerHTML = `
<img src="../assets/img/first-character.png"/>
<h3>Name: ${cundo.name}</h3>
<br>
<h3>ATK: ${cundo.atk}</h3>
<img src="../assets/img/pjone.png"/>
<br>
<button id="cundo">Select</button>
`;

console.log(cundo);

//Potions
function potion(){
        return new Item(1, "Potion");
}



function fightCundoSkull(){
        let skull = new Enemy("Skull", 5, 5, 5);
    
        console.log(skull);
    
        
        if(cundo.atk > skull.atk){
            alert('You fight against Skull and won!');
            console.log('You won and if this code works, you deserve ice cream');
        } else if(cundo.atk = skull.atk){
            alert('You fight against Skull and the result was a draw! \n No xp gained');
            console.log('If char.atk > skull.atk then its not working yet lol');
        } else {
             alert('You fight against Skull and lost!');
             console.log('XD');
        }
}




let buttonSkull = document.getElementById("skull");
buttonSkull.addEventListener("click", fightCundoSkull);


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






//Display
/*
function disp(){
  var str='';
  str = 'total number of elements in data array : ' + data.length + '<br>';
  for (i=0;i<data.length;i++) 
  { 
  str += i + ':'+data[i] + " <a href=# onClick='remove_element("+data.indexOf(data[i])+")'> Remove</a> " + "<br >";  // adding each element with key number to variable
  } 
  
  document.getElementById('disp').innerHTML=str; // Display the elements of the array
  }*/