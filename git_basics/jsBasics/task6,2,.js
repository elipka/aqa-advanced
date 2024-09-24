function verifyAge (age) {
    if (age >= 18 && age <= 100) {
        return true;
    } else if (age > 0 && age < 18) {
        return false;
    } else {
        return `incorrect value`;
    }

};

const result = verifyAge(15);
console.log(result);

