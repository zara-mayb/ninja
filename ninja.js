class Ninja {
  constructor(name, strength, speed){
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = 50;
  }
  sayName(){
    console.log(`${this.name}`);
    return this
  }
  showStats(){
    console.log(`${this.name}`,`${this.strength}`,`${this.speed}`,`${this.health}`);
    return this
  }
  drinkSake(){
    this.health += 10;
    return this
  }
}
const ninja1 = new Ninja("Hyabusa", 3, 3);
ninja1.sayName().showStats().drinkSake();
console.log(ninja1.health);