class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("My name is " + this.name);
    }

    showStats() {
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Stength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " sipped sake and his health is now: " + this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        console.log("Takes a drink...")
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
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

const sensei1 = new Sensei("Master Splinter");
sensei1.showStats();
sensei1.speakWisdom();
