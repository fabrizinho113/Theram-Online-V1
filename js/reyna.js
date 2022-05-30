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

class Item {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
}
  
class ItemModelCollection {
    constructor() {
      this.items = [];
    }
    addItem(id, name) {
      if (Array.isArray(this.items)) {
        this.items.push(new Item(id, name));
      }
    }
    removeItem(id) {
      if (Array.isArray(this.items)) {
        this.items = this.items.filter( i => i.id !== id);
      }
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


/*
 //Create Item
 const itemCollection = new ItemModelCollection();
 document.getElementById('addItem').onclick = (e) => {
   const id = itemCollection.items.length; // obviously figure out a better id generator
   itemCollection.addItem(id, `Item Number ${id}`);
   console.log(itemCollection);
 };*/
