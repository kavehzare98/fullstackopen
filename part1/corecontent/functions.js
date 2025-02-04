// arrow functions
const sum = (p1, p2) => {
    console.log("First num:\t" + p1);
    console.log("Second num:\t" + p2);
    return p1 + p2;
}

const result = sum(1, 5);
console.log("Result:\t\t" + result);

// one line arrow functions
const square = p => p * p;
console.log("Squared:\t\t" + square(4));
