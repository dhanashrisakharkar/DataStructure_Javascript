let readline = require('readline-sync');
const link = require('./LinkedList');

function linkList(){
    let flag = true;
    while(flag){
    let number = readline.question("enter choice 1.add 2.display 3.Index 4.exit");
    switch(number)
    {
        case "1" : console.log("enter the element for add")
        let lengthOfLink = readline.question("enter the size");
        if (link.size <= lengthOfLink) {
        for (let i = 1; i <= parseInt(lengthOfLink); i++) {
            let num = readline.question("Enter number to push--->" + i);
            link.add(parseInt(num));
        }
            break;
        
        
    }
    case "2" : console.log("display the linkedlist")
             console.log(link.printList());
             break;
    
    case "3" : console.log("Display the index for each varible");
            f = link.size;
             for(let r =0 ; r!=f;r++)
             {
             console.log(link.indexOf(link.indexOf));
             }
             break;
             
    default : console.log("enter the valid number");
             break;

}
    }
}

// adding element to the list 
// link.add(10); 
// link.add(20); 
// link.add(30); 
// // ll.indexOf(30);
// console.log("Index of 10 " + Link.indexOf(10)+"\nIndex of 20 " + Link.indexOf(20)+"\nIndex of 30 " + Link.indexOf(30)); 
// // prints 10 
// link.printList();


linkList();