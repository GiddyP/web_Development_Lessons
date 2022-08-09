const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

const square = {
    area(num) {
        return Math.pow(num, 2);
    },
    perimeter(num) {
        return num * 4;
    }
}
const hen = {
    name : 'Helen',
    eggCount: 0,
    layanEgg(){
        this.eggCount += 1;
        console.log("EGG");
    }
}