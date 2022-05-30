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


/*
  //Create Item
  const itemCollection = new ItemModelCollection();
  document.getElementById('addItem').onclick = (e) => {
    const id = itemCollection.items.length; // obviously figure out a better id generator
    itemCollection.addItem(id, `Item Number ${id}`);
    console.log(itemCollection);
  };*/