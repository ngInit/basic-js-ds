const { NotImplementedError } = require('../lib/errors');
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

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};