const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootTree === null) {
      this.rootTree = node;
      return this;
    }
    let curRoot = this.rootTree;

    while (curRoot) {
      if (data === curRoot.data) {
        return undefined;
      }
      if (data < curRoot.data) {
        if (curRoot.left === null) {
          curRoot.left = node;
          return this;
        }
        curRoot = curRoot.left;
      } else if (data > curRoot.data) {
        if (curRoot.right === null) {
          curRoot.right = node;
          return this;
        }
        curRoot = curRoot.right;
      }
    }
  }

  has(data) {
    if (!this.rootTree) {
      return false;
    }
    let curRoot = this.rootTree;

    while (curRoot) {
      if (data === curRoot.data) {
        return true;
      }
      if (data < curRoot.data) {
        if (curRoot.left === null) {
          return false;
        }
        curRoot = curRoot.left;
      } else if (data > curRoot.data) {
        if (curRoot.right === null) {
          return false;
        }
        curRoot = curRoot.right;
      }
    }
  }

  find(data) {
    if (!this.rootTree) {
      return null;
    }
    let curRoot = this.rootTree;

    while (curRoot) {
      if (data === curRoot.data) {
        return curRoot;
      }
      if (data < curRoot.data) {
        if (curRoot.left === null) {
          return null;
        }
        curRoot = curRoot.left;
      } else if (data > curRoot.data) {
        if (curRoot.right === null) {
          return null;
        }
        curRoot = curRoot.right;
      }
    }
  }

  remove( data ) {
    // throw new NotImplementedError("Not implemented");
    // // remove line with error and write your code here
  }

  min() {
    if (!this.rootTree) {
      return;
    }
    let curNode = this.rootTree;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    if (!this.rootTree) {
      return;
    }
    let curNode = this.rootTree;
    while (curNode.right !== null) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
