// Arrays

// defining an array
const t = [1, -1, 3];

// appending a value to the array
// this is consistent with techniques from functional programming
//  in this case: the use of immutable data structures
//  in react, the preferred method is concat, which creates a new array with the added item.
t.push(5);

// prints the entire array to the console
console.log(t);

// length of array
console.log(t.length);

// second element of array
console.log(t[1]);


// foreEach receies a function defined using the arrow syntax as a parameter
t.forEach(value => {
    console.log(value);
});

// use of the preferred concat method (React)
const t2 = t.concat(10);
console.log("t: " + t);
console.log("t2: " + t2);

// using the map method
const m = [1, 2, 3];
const m1 = m.map(value => value * 2);
console.log("m:\t" + m);
console.log("m1:\t" + m1);

// map can transform the array into something totally differnt
const m2= m.map(value => '<li>' + value + '</li>');
console.log(m2);

// destructing assignment - allows us to assign individual elements of an array to variables
m.push(4);
m.push(5);
const [first, second, ...rest] = m;
console.log("first:\t" + first);
console.log("second:\t" + second);
console.log("rest:\t" + rest);

// Left off at Part1b - Objects (beginning)









