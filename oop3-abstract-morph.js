console.log("*************************************************************");
console.log("PROBLEM 1:");
console.log("*************************************************************");
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
    constructor() {
        if (this.constructor == Creature) {
            throw new Error("Unable to instantiate Abstract Class Creature");
        }
    }

    move() {
        throw new Error("Sorry, unable to invoke the move method");
    }

    act() {
        throw new Error("Sorry, unable to invoke the act method");
    }
}

class Human extends Creature {
    constructor(name, diet, age) {
        this.name = name;
        this.diet = diet;
        this.age = age;
    }

    move() {
        console.log("Moving...");
    }

    act() {
        console.log("Getting food....");
    }

    sleep() {
        console.log("Sleeping...");
    }
}

class Bird extends Creature {
    constructor(type, weight, age) {
        this.type = type;
        this.weight = weight;
        this.age = age;
    }

    move() {
        console.log("Moving...");
    }

    act() {
        console.log("Looking for food....");
    }

    fly() {
        console.log("Flying...");
    }
}

class Fish extends Creature {
    constructor(habitat, lifeSpan, shape) {
        this.habitat = habitat;
        this.lifeSpan = lifeSpan;
        this.shape = shape;
    }
    move() {
        console.log("Moving...");
    }

    act() {
        console.log("Searching for fish friends....");
    }

    swim() {
        console.log("Swimming...");
    }
}

console.log("*************************************************************");
console.log("PROBLEM 2:");
console.log("*************************************************************");
/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep = () => {
        console.log(this.name + " is sleeping");
    };

    code = function() {
        console.log(this.name + " is coding");
    };

    repeat = function() {
        console.log(
            this.name + " is repeating the above steps, yet another time"
        );
    };

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log(
            "I overrode the methods in the Teacher and Student classes, and I changed all the functions to arrow functions. We learned about prototypes today and I learned that when invoking methods that are inherited from the parent class those methods take precedent unless the children class' methods are arrow functions themselves which then allows those child methods to run."
        );
    }
}

class Teacher extends Person {
    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep = () => {
        console.log(this.name + " sleeps after preparing the lesson plan");
    };

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    };

    repeat = () => {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    };
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.name = name;
    }
    eat() {
        console.log(this.name + " studies, then eats");
    }

    sleep = () => {
        console.log(
            this.name +
                " studies coding so much, that they dream about in their sleep"
        );
    };

    code = () => {
        console.log(
            this.name +
                " was first overwhelmed by coding, but kept at it, and now has become a coding guru!"
        );
    };

    repeat = () => {
        console.log(
            this.name +
                " keeps on studying, coding, eating, and sleeping, and puts it all on repeat."
        );
    };

    //set up your methods in this student class, so all of these methods will override the methods from the super class.
    //eat method should print out - <student name> studies, then eats
    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

console.log("*************************************************************");
console.log("PROBLEM Bonus:");
console.log("*************************************************************");
//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
    prepare = function() {
        console.log("The cook is cooking");
    };
    prepare = function(food1, food2, food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    };

    explain = () => {
        console.log(
            "what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.\nI found that if I switch the position of the function down (it becomes the second method in the class) the prepare method returns the food being cooked, even when I change the function to an arrow function the method still provides the food that is being cooked. I believe that the code is being read from top to bottom and that is why the prepare function runs."
        );
    };
}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();
