const numbersList = [1,10,14,2,4,5,43,34];

const ascNumbers = numbersList.slice();

ascNumbers.sort((a, b) => a - b); 

console.log(numbersList); 
console.log(ascNumbers);
