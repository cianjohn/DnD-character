class Feats {
    constructor(){

    }

}
class CLS{
    constructor(){
        this.level
        this.health
        this.clstraits
        
    }
}
// class Descripton{
//     constructor(){

//     }
// }
class Inventory {
    constructor(){

    }
}
class Character {
    constructor(id, name, stats, level){
        this.id = id;
        this.name = name;
        // this.created = Date.
        this.stats = stats;
        this.level = level
        // this.inventory = ""
        // this.feats = ""

    }
}
let digBick = new Character(1,"DigBick Johnson", [20,20,18,14,14,9], 5)

class appManager {
    constructor(){
        this.characters =  {identifyer: 0}
    }
    updateLocalStorage(){
        localStorage.setItem("characters", JSON.stringify(this.characters))
    }
    updateFromLocalStorage(){
        this.tasks = JSON.parse(localStorage.getItem("characters")) || {identifyer: 0}
    }
    newCharacter(){

    }
    deleteTask(id) {
        delete this.tasks[id]
        this.updateLocalStorage()
        // this.displayAll() 
    }
    modifier
}

prof = 2 + floor((level-1)/4)

modifier = floor((stat-10)/2)