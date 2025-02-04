/*
Exercise Description:
    Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines.
    At each position, there's either an empty white space or `#` character.
*/
let firstString = ' # # # #';
let secondString = '# # # # ';
let lastString = firstString;

for (let row = 1; row <= 8; row += 1) {

        console.log(lastString);

        if (lastString == firstString) {
            lastString = secondString;
        } else {
            lastString = firstString;
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