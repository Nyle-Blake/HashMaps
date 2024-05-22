import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

let myMap = new HashMap()

myMap.set('John', 'Smith'); // Sets a new node with key "John" and value "Smith"
myMap.set('Alex', 'Lewis') // Sets a new node with key "Alex" and value "Lewis"
myMap.resize() // Doubles the number of buckets in the hash map (This is called when loadFactor% or more buckets have been filled)
console.log(myMap.hash('John')) // Returns a hash code from a key
console.log(myMap.has('John')); // Returns true as key "John" is in the hash map
console.log(myMap.get('John')); // Returns the value, "Smith" from the key "John"
console.log(myMap.length()); // Returns the number of nodes in the hash map
console.log(myMap.keys()); // Returns all keys in the hash map in an array
console.log(myMap.values()); // Returns all values in the hash map in an array
console.log(myMap.entries()); // Returns every key value pair in the hash map in an array
myMap.remove('John'); // Removes the node which has the key "John"

console.log(myMap);
myMap.clear() // Clears all nodes from the hash map
console.log(myMap)

let mySet = new HashSet()

mySet.set('John'); // Sets a new node with key "John"
mySet.set('Alex', 'Lewis') // Sets a new node with key "Alex"
mySet.resize() // Doubles the number of buckets in the hash set (This is called when loadFactor% or more buckets have been filled)
console.log(mySet.hash('John')) // Returns a hash code from a key
console.log(mySet.has('John')); // Returns true as key "John" is in the hash set
console.log(mySet.length()); // Returns the number of nodes in the hash set
console.log(mySet.keys()); // Returns all keys in the hash map in an array
mySet.remove('John'); // Removes the node which has the key "John"

console.log(mySet)
mySet.clear() // Clears all nodes from the hash set
console.log(mySet)