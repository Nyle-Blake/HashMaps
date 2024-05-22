class SetNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

class HashSet {
  constructor() {
    this.bucketsArr = new Array(16).fill(null);
    this.loadFactor = 0.75;
    this.capacity = this.bucketsArr.length;
    this.occupied = 0;
  }

  // Instead of having a class to create nodes you can have a factoey function 
  // createNode(key, next = null) {
  //   return { key, next };
  // }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.bucketsArr.length;
    };
    return hashCode;
  }

  resize() {
    const oldArr = this.bucketsArr;
    this.capacity *= 2;
    this.bucketsArr = new Array(this.capacity).fill(null);
    this.occupied = 0;
    oldArr.forEach(bucket => {
      let current = bucket;
      while (current !== null) {
        this.set(current.key);
        current = current.next;
      }
    });
  }

  set(key) {
    if (this.occupied / this.capacity >= this.loadFactor) this.resize();
    // resize
    const bucketHash = this.hash(key);
    if (!this.has(key)) {
      // The key doesnt exist in the bucket
      const newNode = new SetNode(key);
      if (this.bucketsArr[bucketHash] == null) {
        this.occupied++;
        this.bucketsArr[bucketHash] = newNode;
      } else {
        let current = this.bucketsArr[bucketHash];
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    // key already exists in the hash set, do nothing
  }

  has(key) {
    const bucketHash = this.hash(key);
    let current = this.bucketsArr[bucketHash];
    while (current !== null) {
      if (current.key == key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(key) {
    const bucketHash = this.hash(key);
    let current = this.bucketsArr[bucketHash], previous = null;

    while (current !== null && current.key !== key) {
      previous = current;
      current = current.next;
    }

    if (current === null) return; // key is not found

    if (previous === null && current.next === null) { // checks if current == first node and there are NOT following nodes
      // removes first node as it is the only one 
      // decrements occupied buckets as bucket is now empty
      this.occupied--;
      this.bucketsArr[bucketHash] = current.next;
    } else if (previous === null) { // checks if current == first node and there ARE following nodes
      // removes first node with nodes after it
      this.bucketsArr[bucketHash] = current.next;
    } else {
      // remove node with nodes before and after
      previous.next = current.next;
    }
  }

  length() {
    let count = 0;
    this.bucketsArr.forEach(bucket => {
      let current = bucket;
      while (current !== null) {
        count++;
        current = current.next;
      }
    })
    return count;
  }

  clear() {
    this.bucketsArr = new Array(16).fill(null);
    this.capacity = this.bucketsArr.length;
    this.occupied = 0;
  }

  keys() {
    let keysArr = [];
    this.bucketsArr.forEach(bucket => {
      let current = bucket;
      while (current !== null) {
        keysArr.push(current.key);
        current = current.next;
      }
    })
    return keysArr;
  }
}

export { HashSet, SetNode };