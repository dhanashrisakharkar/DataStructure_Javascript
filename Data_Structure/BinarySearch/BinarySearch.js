let readline = require('readline-sync');
let list = ["dhanashri","pooja","rucha"];
function binarySearch( list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        name =readline.question("enter the name which search :-"); 
        middle = Math.floor((first + last)/2);
        //middle = readline.question("enter the name which search");
        if (list[middle] == name) {
            found = true;
            position = middle;
        } else if (list[middle] != name) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}


result = console.log(binarySearch(list));