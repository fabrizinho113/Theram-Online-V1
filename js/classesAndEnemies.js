// Classes

//Character
export class Character {
    constructor(icon, name, atk, level, xp, spray){
        this.icon = icon;
        this.name = name;
        this.atk = atk;
        this.level = level;
        this.xp = xp;
        this.spray = spray;
    }
}



//Enemy
export class Enemy{
    constructor(icon, name,atk){
        this.icon = icon;
        this.name = name;
        this.atk = atk;
    }
}

export let zombie = new Enemy ("../assets/img/zombie.png","Zombie", 6);

export let darkKnight = new Enemy ("../assets/img/dark-knight.png","Dark Knight", 12);

export let darkLord = new Enemy ("../assets/img/dark-lord.png","Dark Lord", 19);

export let skullKing = new Enemy ("../assets/img/skull-king.png","Skull King", 28);