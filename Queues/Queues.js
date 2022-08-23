/*
* Queue is DS is based on first in first out
* */
function Queue() {
    //this will hold data  for our queue
    collection = [];
    //this fucntion will print our queue
    this.print = function () {
        console.log(collection)
    };
    //adding element to queue
    this.enqueue = function (element) {
        collection.push(element);
    };
    // .shift pulls off the first element of array
    this.dequeue = function () {
        return collection.shift();
    };
    //getting first element of the queue
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return (collection.length);
    };
    this.isEmpyt = function () {
        return (collection.length === 0)
    };
}

// lets run these

var queue = new Queue();
queue.enqueue(1)
queue.enqueue("Taimoor")
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());
queue.front(queue.front());

console.log(queue.isEmpyt());