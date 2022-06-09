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