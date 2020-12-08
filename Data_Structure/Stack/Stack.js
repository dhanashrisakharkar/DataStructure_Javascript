class StackAdd {
    arr;
    top;
    size;
    constructor ()
    {
      this.arr = [];
      this.top = -1;
      this.size = 0;

    }

    isEmpty ()
    {
        if (this.top == -1)
        {
            return true;
        }else
        return false;

    }

    size()
    {
        this.size = 4;
        return this.size;
    }

    push(num)
    {
        this.top = this.top+1;
        this.arr[this.top] = num;
        this.size++;
    }

    pop()
    {
        if (this.top == 0){
            console.log("Stack is underflowed");
            return null;
        }else {
            if (this.arr.length == 0) 
            return "Underflow"; 
        return this.arr.pop(); 
        }
    }

    display()
    {
        if(this.top > -1){
            let printElem = " ";
            for (let i = 0 ; i <= this.top; i++){
                printElem = printElem + this.arr[i]+" ";
            }
            console.log(printElem);
        }
        return console.log("enpty");
    }

}
//let Stack = new StackAdd(); Stack.push(1); Stack.push(2); Stack.push(3);  console.log(Stack.isEmpty());  console.log(Stack.pop());   console.log(Stack.isEmpty()); console.log(StackAdd.arr)

module.exports = new StackAdd; 
