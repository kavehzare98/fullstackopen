/* 
Exercise Description:
    Write a loop that makes seven calls to console.log to output #\n##\n...
    Hint: use the string .length method
*/

let poundChars = '#';
let maxIterations = 7;

while (poundChars.length <= maxIterations) {
    console.log(poundChars);
    poundChars += '#';
}

/*
OUTPUT:
#
##
###
####
#####
######
#######
*/