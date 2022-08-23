var Stack = function () {
    //creates Stack
    this.count = 0;
    this.storage = {};


    //adds item to an end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }
    //removes item from the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return "Underflow";
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function () {
        return this.count;
    }
    //lets get the vaue of at end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();
myStack.push("Taimoor");
myStack.push("Ahmed");
myStack.push(1);
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());