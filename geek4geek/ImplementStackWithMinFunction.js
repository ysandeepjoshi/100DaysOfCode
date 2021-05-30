class Stack{
    constructor(){
        this.stack = [];
    }
    push = function (data) {
        if(this.stack.length==0){
            this.min = data;
        }
        else{
            this.min = Math.min(this.min,data);
        }        
        this.stack.push(data);
    }
    getMin = function(){
        return this.min;
    }
    pop = function(){
        let poppedElem = this.stack.pop();
        this.min = Math.min(...this.stack);
        return poppedElem;
    }
}

let newStack = new Stack();
newStack.push(3);
newStack.push(1);
newStack.push(5);
newStack.push(2);
console.log(newStack.getMin());
console.log(newStack.pop());
console.log(newStack.getMin());
console.log(newStack.pop());
console.log(newStack.getMin());
console.log(newStack.pop());
console.log(newStack.getMin());