// object literals

const object1  = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
};

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford Uni',
};


console.log("Name: " + object1.name);
console.log("Age: " + object1.age);
console.log("Education: " + object1.education);

console.log("First Name: " + object3.name.first);
console.log("Last Name: " + object3.name.last);
console.log("Grades: " + object3.grades);
console.log("Dept: " + object3.department);

// adding a property
object1.address = 'Helsinki';

console.log('Address: ' + object1['address']);
