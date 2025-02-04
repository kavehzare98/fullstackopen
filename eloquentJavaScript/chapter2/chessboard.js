/*
Exercise Description:
    Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines.
    At each position, there's either an empty white space or `#` character.
*/
let firstString = ' ';
let secondString = '#';
let gridDimension = 5;

let firstChar = '#';
let secondChar = ' ';
let temp;

for (let i = 1; i < gridDimension; i++)
{
    firstString += firstChar;
    secondString += secondChar;

    // Swap the characters
    temp = firstChar;
    firstChar = secondChar;
    secondChar = temp;
}



for (let number = 0; number < gridDimension; number+=2) {
    
    if (gridDimension % 2 != 0 && number == gridDimension - 1) {
        console.log(firstString);
    } else {
        console.log(firstString);
        console.log(secondString);
    }
}

/* OUTPUT:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
