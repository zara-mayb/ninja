class Ninja {
  constructor(name, strength, speed){
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = 50;
  }
  sayName(){
    console.log(`${this.name}`);
  }
  showStats(){
    console.log(`${this.name}`,`${this.strength}`,`${this.speed}`,`${this.health}`);
  }
  drinkSake(){
    this.health += 10;
  }
}
const ninja1 = new Ninja("Hyabusa", 3, 3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health);