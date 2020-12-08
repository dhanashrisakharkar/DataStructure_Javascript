let readline = require('readline-sync');
const Queue = require('./Queue');
const queuer = require('./Queue');

function queue(){
    flag = true;
     
    while(true)
    {

    let num = readline.question("enter the option 1:enqueu 2:dequeue 3:display 4:exit");

    switch(num){
        case "1" : console.log("enter the no to push");
        let lengthOfQueue = readline.question("enter the size");
        if (queuer.items <= lengthOfQueue) {
        for (let i = 1; i <= parseInt(lengthOfQueue); i++) {
            let num = readline.question("Enter number to push--->" + i +":");
            queuer.enqueue(parseInt(num));
          
        }
    }
        break;
        
        case "2" : console.log("remove the element from queue");
                   console.log(queuer.dequeue());
                   console.log(queuer.items);
                   break;
        
        case "3" : console.log("display the element");
                   console.log(queuer.printQueue());
                   break;
        default : console.log("enter the valid no");

}
    }
}

queue();