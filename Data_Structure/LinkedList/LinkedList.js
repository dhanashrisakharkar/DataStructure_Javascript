const { display } = require("./Stack");

class List { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 
class LinkedList {
   constructor() {
       
       this.head = null;
       this.size = 0;
   }

   add(element) {
        
       var list = new List(element);

       var current;
       if (this.head == null)
           this.head = list;
       else {
           current = this.head;

           // iterate to the end of the 
           // list 
           while (current.next) {
               current = current.next;
           }

           // add node 
           current.next = list;
       }
       this.size++;
   }

   printList() {
       var curr = this.head;
       var str = "";
       while (curr) {
           str += curr.element + " ";
           curr = curr.next;
       }
       console.log();
       console.log(str);
   }
   indexOf(head) {
       let r = this.printList();
       let count = 0;
       let current = this.head;

       // iterae over the list 
       while (current != null) {
           // compare each element of the list 
           // with given element 
            if (current === head){
           count++;
           current = current.next;
            return count;
            }
       // not found 
       return -1;
   }
}
}
module.exports = new LinkedList();
// adding element to the list 
// obj.add(10); 
// obj.add(20); 
// obj.add(30); 
// // ll.indexOf(30);
// console.log("Index of 30 " + obj.indexOf(30)); 
// // prints 10 
// obj.printList();