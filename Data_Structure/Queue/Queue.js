class Queue 
{ 
    constructor() 
    { 
        this.items = []; 
    } 
    enqueue(num) {
        this.items.push(num);
        console.log(this.items);
    }
    dequeue (){
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift();
    
    }

    isEmpty(){
        return this.items.length == 0; 
    }

    printQueue(){
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
        {
        str += this.items[i] +" "; 
        }
        return str; 
    }
    
} 
module.exports = new Queue();
