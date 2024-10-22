const car1 = {
    brand: "BMW",
    model: "X3",
    year: 2020
};

const car2 = {
    brand: "Audi",
    model: "Q8",
    year: 2024
};

const car3 = { ...car1, ...car2};

console.log(car3);

