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

  remove(data) {
    let currentElem = this.rootKnot;
    if(!currentElem || (!currentElem.left && !currentElem.right)) {
      return null;
    }
    this.rootKnot = removeElem(currentElem, data);

    function removeElem(node, data) {
      if(data < node.data) {
        node.left = removeElem(node.left, data);
        return node
      } else if(data > node.data) {
        node.right = removeElem(node.right, data);
        return node
      } else {
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeElem(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let currentElem = this.rootKnot;
    while (currentElem.left) {
      currentElem = currentElem.left
    }
    return currentElem.data;
  }

  max() {
    let currentElem = this.rootKnot;
    while (currentElem.right) {
      currentElem = currentElem.right
    }
    return currentElem.data;
  }
}

module.exports = {
  BinarySearchTree
};