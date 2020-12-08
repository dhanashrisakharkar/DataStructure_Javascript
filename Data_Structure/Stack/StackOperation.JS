let readline = require('readline-sync');
let Stack = require('../../Utility/Stack');

function stackOperation(userinput){
    switch(parseInt(userinput))
    {
        case 1 :
            console.log("enter the no");
            let num = readline.question("enter no to push");
            console.log(Stack.push(num)+" "+Stack.push(num)+" "+Stack.push(num))
            console.log(Stack.arr);
            break;
        case 2 :
            console.log("pop the no from stack");
            readline.question(Stack.pop());
            break;
        case 3 :
            console.log("display stack");
            readline.question(Stack.display());
            break;
        default:
            console.log("exit");
            break;            
    }
//let stack1 = readline.question("Enter the no ");
//let add = new StackAdd;
 //add.push(stack1);
 //add.push(stack1); 
 //add.push(stack1); 
 //console.log(add.isEmpty());
 //console.log(add.pop()); 

 
}

let userinput = readline.question("enter the choice 1.push 2.pop 3.display 4.exit");
console.log(stackOperation(parseInt(userinput)));