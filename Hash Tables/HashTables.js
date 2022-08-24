/*
* Hash Tables
*
* */
/*
* if two strings point to same number that is called collusion
* */
var hash = function (string, max) {
    //max is number of buckets that we are going to use to store our data
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        // adding the ascii value of each character to the hash
        hash += string.charCodeAt(i);
    }
    // returning the hash value means that we are going to use the remainder of the hash value to find the index of the bucket
    return hash % max;
}
let HashTable = function () {
    // creating an array of buckets to store our data
    let storage = [];
    let storageLimit = 2;
    //printing function to print the data in the buckets
    this.print = function () {
        console.log(storage);
    }
    this.add = function (key, value) {
        let index = hash(key, storageLimit);
        // if the bucket is empty then we are going to add the key and value to the bucket
        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            var inserted = false;
            // if the bucket is not empty then we are going to loop through the bucket and check if the key is already present in the bucket
            for (var i = 0; i < storage[index].length; i++) {
                // if the key is already present then we are going to update the value of the key
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            // if the key is not present then we are going to add the key and value to the bucket
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }
    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };
    this.lookup = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
}
console.log(hash('Taimoor', 10));
let ht = new HashTable();
ht.add('Taimoor', 'Taimoor');
ht.add('G', 'kHAN');
ht.print();
