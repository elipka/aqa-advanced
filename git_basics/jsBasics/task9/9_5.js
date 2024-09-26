const users =[
    {
        name: "Lisa",
        age:24,
        isStudent: true
    },

    {
        name: "Josh",
        age:35,
        isStudent: false
    },

    {
        name: "Marta",
        age:20,
        isStudent: true
    }
];

for (const person of users) {
    const {name, age, isStudent} = person;

    console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
};

