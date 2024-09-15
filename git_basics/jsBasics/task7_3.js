function divide(numerator, denominator) {
    try {
        if (denominator === 0 || typeof denominator !== 'number' || isNaN(denominator) 
            || typeof numerator !== 'number' || isNaN(numerator)) {
            throw new Error("Denominator cannot be zero or arguments are not numbers");
        }

        let result = numerator / denominator;
        console.log(`The result is: ${result}`);

    } catch (error) {
        console.error(`There is an error: ${error.message}`);
    } finally {
        console.log("Operation is finished");
    }
}

divide(20, 5);
divide(10, 0);
divide(15, 'hello');
