
console.log('Testing: Heap');

/**
 * Heap tests
 * @type {Heap}
 */
var Heap = require('./../Datastructures/Heap.js');

// testing Heap
var heap = new Heap();
var heap2 = new Heap();

// Heap::insert
// Heap::toArray
assert(heap.insert(1) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1]));
assert(heap.insert(2) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1,2]));
assert(heap.insert(3) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1,2,3]));
assert(heap.insert(4) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1,2,3,4]));
assert(heap.insert(5) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1,2,3,4,5]));
assert(heap.insert(10) === undefined);
assert(JSON.stringify(heap.toArray()) === JSON.stringify([1,2,3,4,5,10]));

/*
 compare
 count
 current
 extract
 isEmpty
 key
 next
 recoverFromCorruption
 rewind
 top
 toString
 valid
 */
