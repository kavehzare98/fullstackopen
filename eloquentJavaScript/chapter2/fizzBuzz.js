/*
Exercise Description:
    Write a program that uses console.log to print all numbers
    from 1 to 100, with two exceptions. Any number divisible by
    3, print "Fizz", any number divisible by only 5, "Buzz",
    by both "FizzBuzz", otherwise print the rest normally.
*/

for (let number = 1; number <= 100; number += 1) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}