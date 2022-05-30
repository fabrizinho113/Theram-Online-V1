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

   //Create Item
   /*const itemCollection = new ItemModelCollection();
   document.getElementById('addItem').onclick = (e) => {
     const id = itemCollection.items.length; // obviously figure out a better id generator
     itemCollection.addItem(id, `Item Number ${id}`);
     console.log(itemCollection);
   };*/