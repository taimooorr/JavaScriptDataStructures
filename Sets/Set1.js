/*
* Sets
* implemtation of sets in javascript
* */
function mySet() {
    //collection will hold the set
    var collection = [];
    //this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };
    //lets return all values in the set
    this.values = function () {
        return collection;
    };
    //Adding an element to the set
    this.add = function (element) {
        // first we need to check if the element is already in the set
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    // lets remove an element from the set

    /*
    * In Es6 We use this.Delete instead of this.remove
    * */
    this.remove = function (element) {
        if (this.has(element)) {
            //finding the index of the element
            index = collection.indexOf(element);
//removing the element from the collection with splice
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // size of the set
    /*
    * in Es6 Size is not method it is property
    * */
    this.size = function () {
        return collection.length;
    }
    /*
    * Union combines two sets and returns a new set and lacks duplicates
    * */
    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    // intersection pf two sets
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // difference of two sets
    this.difference = function (otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    //check if the set is subset of another set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (e) {
            return otherSet.has(e);
        });
    };
}


var set1 = new mySet();
var set2 = new mySet();
set1.add('a');
set1.add('b');
set1.add('c');
set1.add('d');
set1.add(1);
set2.add('a');
set2.add('b');
set2.add('c');
set2.add('d');
//lets check if the set1 is a subset of set2
console.log(set1.subset(set2));
//lets do the intersection of set1 and set2
console.log(set1.intersection(set2).values());
console.log(set1.union(set2).values());
// lets Create ES6 Set
var set3 = new Set();
set3.add('a');
set3.add('b');
set3.add('c');
set3.add('d');
console.log(set3.values());




