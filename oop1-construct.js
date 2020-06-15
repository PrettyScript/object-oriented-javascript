console.log("*************************************************************");
console.log("PROBLEM 1:");
console.log("*************************************************************");
//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
    purpose =
        "Classes are used to model real world things that we want to represent inside our programs.";

    explain() {
        console.log(this.purpose);
    }

    pieces() {
        console.log(
            `The essential parts to building a class are using the keyword "class" to create a class and having a constructor that initializes new objects and method calls.`
        );
    }
}

const because = new WhyClass();
because.explain();
because.pieces();

console.log("*************************************************************");
console.log("PROBLEM 2:");
console.log("*************************************************************");
/*2. You are exploring the rain forests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...
class Creature {
    constructor(name, species, diet) {
        this.name = name;
        this.species = species;
        this.diet = diet;
    }
    climb() {
        console.log(`${this.name} is climbing...`);
    }
    swim() {
        console.log(`${this.name} is swimming...`);
    }
    jump() {
        console.log(`${this.name} is jumping...`);
    }
    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
    fly() {
        console.log(`${this.name} is flying...`);
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
    hunt() {
        console.log(`${this.name} is hunting...`);
    }
    walk() {
        console.log(`${this.name} is walking...`);
    }
}

const jaguar = new Creature("Jaguar", "Felidae", "Carnivorous");
jaguar.climb();
jaguar.swim();

const monkey = new Creature("Squirrel Monkey", "Primate", "Omnivores");
monkey.jump();
monkey.sleep();

const parrot = new Creature("Hyacinth Macaw", "Bird", "Frugivore");
parrot.fly();
parrot.eat();

const owl = new Creature("Spectacled Owl", "Bird", "Carnivorous");
owl.fly();
owl.eat();

const crocodile = new Creature("Black Caiman", "Reptile", "Generalist");
crocodile.eat();
crocodile.hunt();

const turtle = new Creature(
    "South American River Turtle",
    "Reptile",
    "Omnivore"
);
turtle.walk();
turtle.sleep();

console.log("*************************************************************");
console.log("PROBLEM 3:");
console.log("*************************************************************");
/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
    constructor(name, sides, base, height, length, width, radius) {
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
        this.length = length;
        this.width = width;
        this.radius = radius;
    }
    calcTriangleArea() {
        console.log(
            `${this.name}'s area is calculated to be : ${0.5 *
                this.base *
                this.height}`
        );
    }
    calcTrianglePerimeter() {
        console.log(
            `${this.name}'s perimeter is calculated to be : ${this.base +
                (this.sides[1] + this.sides[2])}`
        );
    }
    calcTriangleHeight() {
        console.log(
            `${this.name}'s height is calculated to be: ${Math.sqrt(
                Math.pow(this.sides[1], 2) - Math.pow(this.base, 2)
            ).toFixed(2)}`
        );
    }
    calcCircumference() {
        console.log(
            `${this.name}'s circumference is calculated to be : ${(
                2 *
                Math.PI *
                this.radius
            ).toFixed(2)}`
        );
    }
    calcRectangleArea() {
        console.log(
            `${this.name}'s area is calculated to be : ${this.length *
                this.width}`
        );
    }

    calcRectanglePerimeter() {
        console.log(
            `${this.name}'s perimeter is calculated to be : ${2 * this.length +
                2 * this.width}`
        );
    }
    calcCircleArea() {
        console.log(
            `${this.name}'s area is calculated to be : ${(
                Math.PI *
                this.radius ** 2
            ).toFixed(2)}`
        );
    }
    calcCircleCircumference() {
        console.log(
            `${this.name}'s circumference is calculated to be : ${(
                2 *
                Math.PI *
                this.radius
            ).toFixed(2)}`
        );
    }
}

const newTriangle = new Shape("triangle", [4, 7, 7], 4, null);
newTriangle.calcTriangleArea();
newTriangle.calcTrianglePerimeter();
newTriangle.calcTriangleHeight();

const newRectangle = new Shape("rectangle", 4, null, null, 2, 5);
newRectangle.calcRectangleArea();
newRectangle.calcRectanglePerimeter();
const newCircle = new Shape("circle", 1, null, null, null, null, 5);
newCircle.calcCircleArea();
newCircle.calcCircleCircumference();

// const triangle = {
//     name: "triangle",
//     sides: [4, 7, 7], //lengths of each side
//     base: null,
//     height: null, //determine this height using basic geometry.  You may need to research this one.
//     calcArea: function() {
//         console.log(
//             `${this.name}'s area is calculated to be : ${0.5 *
//                 this.base *
//                 this.height}`
//         );
//     },
//     calcPerimeter: function() {
//         console.log(
//             `${this.name}'s perimeter is calculated to be : ${this.base +
//                 (this.sides[1] + this.sides[2])}`
//         );
//     }
// };

// triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
// triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to calculate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

// console.log(triangle);
// triangle.calcArea();
// triangle.calcPerimeter();

// const rectangle = {
//     name: "rectangle",
//     sides: 4,
//     length: 2,
//     width: 5,
//     calcArea: function() {
//         console.log(
//             `${this.name}'s area is calculated to be : ${this.length *
//                 this.width}`
//         );
//     },
//     calcPerimeter: function() {
//         console.log(
//             `${this.name}'s perimeter is calculated to be : ${2 * this.length +
//                 2 * this.width}`
//         );
//     }
// };

// console.log(rectangle);
// rectangle.calcArea();
// rectangle.calcPerimeter();

// const circle = {
//     name: "circle",
//     sides: 1,
//     radius: 5,
//     calcArea: function() {
//         console.log(
//             `${this.name}'s area is calculated to be : ${(
//                 Math.PI *
//                 this.radius ** 2
//             ).toFixed(2)}`
//         );
//     },
//     calcCircumference: function() {
//         console.log(
//             `${this.name}'s circumference is calculated to be : ${(
//                 2 *
//                 Math.PI *
//                 this.radius
//             ).toFixed(2)}`
//         );
//     }
// };

// console.log(circle);
// circle.calcCircumference();
// circle.calcArea();

console.log("*************************************************************");
console.log("PROBLEM Bonus Exercises:");
console.log("*************************************************************");
/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usable WITHOUT instantiating the class.

*/

// class Earth {
//     name;
//     planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

//     constructor(name, num) {
//         this.name = name;
//         this.planetNum = num;
//     }
// }

// const earth = new Earth("earth", 3);
// console.log(earth);

function Earth(name, num) {
    const earth = {};
    earth.name = name;
    earth.planetNum = num;
    return earth;
}

const earth = Earth("Earth", 3);
console.log(earth);
