class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("My name is " + this.name);
    }

    showStats(){
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Stength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " sipped sake and his health is now: " + this.health);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const ninja2 = new Ninja("Roko", 100);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();