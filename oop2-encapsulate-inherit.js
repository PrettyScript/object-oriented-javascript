console.log("*************************************************************");
console.log("PROBLEM 1:");
console.log("*************************************************************");
/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/
//your code here...
class Book {
    #author;
    #publisher;

    set author(name) {
        this.#author = name;
    }
    get author() {
        return this.#author;
    }

    set publisher(name) {
        this.#publisher = name;
    }
    get publisher() {
        return this.#publisher;
    }
}

const book = new Book();
book.author = "Dr. Seuss";
console.log(book.author);

book.publisher = "Bennett Cerf";
console.log(book.publisher);

class Author {
    #name;
    #books;

    set name(authorName) {
        this.#name = authorName;
    }

    set books(arr) {
        this.#books = arr;
    }

    get name() {
        return this.#name;
    }

    get books() {
        return this.#books;
    }
}

const author = new Author();
author.name = "J. K. Rowling";
console.log(author.name);

author.books = [
    "Sorcerer's Stone",
    "Chamber of Secrets",
    "Prisoner of Azkaban"
];
console.log(author.books);

class Publisher {
    name = "Crown Publishing Group";
    #authors;
    #books;

    set authors(authors) {
        this.#authors = authors;
    }

    set books(books) {
        this.#books = books;
    }

    get authors() {
        return this.#authors;
    }

    get books() {
        return this.#books;
    }
}

const publisher = new Publisher();
console.log(publisher.name);
publisher.authors = ["Michelle Obama", "Barack Obama", "Mindy Kaling"];
console.log(publisher.authors);

publisher.books = ["Becoming", "The Inaugural Address, 2009", "Why Not Me?"];
console.log(publisher.books);

class Review {
    #rating;
    #user;

    set rating(rate) {
        this.#rating = `The rating is ${rate} out of 10.`;
    }

    set user(name) {
        this.#user = name;
    }

    get rating() {
        return this.#rating;
    }

    get user() {
        return this.#user;
    }
}

const review = new Review();
review.rating = 8;
console.log(review.rating);

review.user = "Jessica";
console.log(review.user);

console.log("*************************************************************");
console.log("PROBLEM 2:");
console.log("*************************************************************");
/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a company name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/

//your code here...

class Umbrella {
    constructor(parentName, numberOfEmp, subsidiaries) {
        this.parentName = parentName;
        this.numberOfEmp = numberOfEmp;
        this.subsidiaries = subsidiaries;
    }

    employees() {
        console.log(`${this.parentName} has ${this.numberOfEmp} employees.`);
    }

    parentCompanies() {
        console.log(`There are ${this.subsidiaries} under ${this.name}`);
    }
}

const allegisGroup = new Umbrella("Allegis Group", 19000, 11);
allegisGroup.employees();
allegisGroup.parentCompanies();

class Company extends Umbrella {
    constructor(name, numberOfEmp, foundingYr) {
        super(numberOfEmp);
        this.name = name;
        this.numberOfEmp = numberOfEmp;
        this.foundingYr = foundingYr;
    }

    founded() {
        console.log(`${this.name} was founded in ${this.foundingYr}`);
    }
    about() {
        console.log(`${this.name} is a team of ${this.numberOfEmp}.`);
    }
}

let teksystems = new Company("TEKsystems", 80000, 1994);
teksystems.founded();
teksystems.about();

let aerotek = new Company("Aerotek", 8000, 1983);
aerotek.founded();
aerotek.about();

let astonCarter = new Company("Aston Carter", 500, 1997);
astonCarter.founded();
astonCarter.about();

class Site extends Company {
    constructor(name, numberOfEmp, location, newLocation) {
        super(name, numberOfEmp);
        this.location = location;
        this.newLocation = newLocation;
    }
    duties() {
        console.log(
            `${this.name} provides excellent customer service at ${this.location}!`
        );
    }

    grandOpening() {
        console.log(
            `With over ${this.numberOfEmp} employees, ${this.name} should open a new office at ${this.newLocation}.`
        );
    }
}

teksystems = new Site("TEKsystems", 80000, "Lake Mary, FL", "Downtown Disney");
teksystems.duties();
teksystems.grandOpening();

aerotek = new Site("Aerotek", 8000, "Addison, TX", "Frisco, TX");
aerotek.duties();
aerotek.grandOpening();

astonCarter = new Site("Aston Carter", 500, "Doral, FL", "Miramar, FL");
astonCarter.duties();
astonCarter.grandOpening();

class Employee {
    constructor(name, jobTitle, salary) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    working() {
        console.log(`${this.name} is working hard as a ${this.jobTitle}!`);
    }

    onBreak() {
        console.log(`${this.name} is on break... will be back in 1-hour.`);
    }
}

const employee1 = new Employee("Jane", "CEO", "1 Million");
const employee2 = new Employee("John", "Manager", "1 Million");
const employee3 = new Employee("Cici", "Secretary", "1 Million");
const employee4 = new Employee("Jess", "Engineer", "1 Million");
const employee5 = new Employee("Sebastian", "Engineer", "1 Million");
const employee6 = new Employee("Mark", "Financial Officer", "1 Million");
const employee7 = new Employee("Lori", "Janitor", "1 Million");
const employee8 = new Employee("Kevin", "Marketer", "1 Million");
const employee9 = new Employee("Morty", "HR Personnel", "1 Million");
const employee10 = new Employee("Spongebob", "Lawyer", "1 Million");

console.log("*************************************************************");
console.log("PROBLEM Bonus:");
console.log("*************************************************************");
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relevant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relevant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...
class Bookstore {
    constructor(storeName) {
        this.storeName = storeName;
        this.book = new Book();
        this.author = new Author();
        this.publisher = new Publisher();
        this.review = new Review();
    }

    childrenLiterature() {
        console.log(
            `${book.author} - Publisher: ${book.publisher}\n${author.books} by ${author.name},${review.rating} for these books.`
        );
    }

    nonFiction() {
        console.log(
            `${publisher.books} are written by ${publisher.authors} - publisher: ${publisher.name}`
        );
    }

    purchase() {
        console.log("buying books...");
    }

    browseStore() {
        console.log("walking through the aisles...");
    }
}

const bookStore = new Bookstore("Book Store");
bookStore.childrenLiterature();
bookStore.nonFiction();
