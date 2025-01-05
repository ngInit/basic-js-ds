const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.rootKnot = null;
    }

  root() {
    return this.rootKnot;
  }

  add(data) {
    this.rootKnot = addElem(this.rootKnot, data);

    function addElem(node, data) {
        if (!node) {
            return new Node(data);
        }
        if (node.data === data) {
            return node;
        }
        if (data < node.data) {
            node.left = addElem(node.left, data);
        }
        if (data > node.data) {
            node.right = addElem(node.right, data);
        }
        return node;
    }
  }

  has(data) {
      let currentElem = this.rootKnot;
      while(currentElem) {
          if (data === currentElem.data) {
              return true;
          }
          currentElem = data < currentElem.data ?
              currentElem.left :
              currentElem.right
      }
      return false;
  }

  find(data) {
      let currentElem = this.rootKnot;
      while(currentElem) {
          if (data === currentElem.data) {
              return currentElem;
          }
          currentElem = data < currentElem.data ?
              currentElem.left :
              currentElem.right
      }
      return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentElem = this.rootKnot;
    while (currentElem.left) {
        currentElem = currentElem.left
    }
    return currentElem.data;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};