function verifyAge (age) {
    if (age >= 18 && age <= 100) {
        return true;
    } else if (age > 0 && age < 18) {
        return false;
    } else {
        return `incorrect value`;
    }

};

const result1 = verifyAge(25);
console.log(result);

const result2 = verifyAge(15);
console.log(result);

