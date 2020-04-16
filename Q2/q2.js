// JavaScript Document

//declaring a class Person
class Person {
  constructor(name, age, gender, classes) {
    //class methods
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //declaring a greeting message to be displayed in console.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  //declaring a goodbye message to declare in console
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}


//declaring instance values for the constructor methods in class-person.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//using inheritance for reusing the code that declare before.
//The extends keyword is used to create a child class of another class (parent).
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
let teacher = new Teacher("Mark Twain");