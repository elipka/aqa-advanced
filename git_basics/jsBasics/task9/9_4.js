const person = {
    firstName: "Lisa",
    lastName: "Lipka",
    age: 24
}

person.email = "some@gmail.com";

delete person.age;

console.log(person);