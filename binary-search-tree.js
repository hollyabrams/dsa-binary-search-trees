class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
// Check if the root of the tree is empty
  insert(val) {
    if (!this.root) {
      // If it is, set the root to a new node with the given value
      this.root = new Node(val);
      // Return the tree
      return this;
    }

    // If the root is not empty, start at the root
    let currentNode = this.root;
    while (true) {
      // If the given value is less than the current node's value
      if (val < currentNode.val) {
        // If the current node does not have a left child
        if (!currentNode.left) {
          // Add a new node with the given value as the left child
          currentNode.left = new Node(val);
          // Return the tree
          return this;
        }
        // If the current node does have a left child, move to that child
        currentNode = currentNode.left;
      } else {
        // If the given value is greater than or equal to the current node's value
        // If the current node does not have a right child
        if (!currentNode.right) {
          // Add a new node with the given value as the right child
          currentNode.right = new Node(val);
          // Return the tree
          return this;
        }
        // If the current node does have a right child, move to that child
        currentNode = currentNode.right;
      }
    }
  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // The main insertRecursively method that is called externally
  insertRecursively(val) {
    // Set the root of the tree to the result of the helper method
    this.root = this._insertRecursively(this.root, val);
    // Return the tree
    return this;
  }

  // The helper method that does the insertion recursively
  _insertRecursively(node, val) {
    // If the current node is null
    if (!node) {
      // Create a new node with the given value and return it
      return new Node(val);
    }

    // If the given value is less than the current node's value
    if (val < node.val) {
      // Recursively call the helper method with the left child and the given value
      node.left = this._insertRecursively(node.left, val);
    } else {
      // If the given value is greater than or equal to the current node's value
      // Recursively call the helper method with the right child and the given value
      node.right = this._insertRecursively(node.right, val);
    }

    // Return the current node
    return node;
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  // The find method that is called externally
  find(val) {
    // Set the current node to the root of the tree
    let currentNode = this.root;
    // Keep looping as long as the current node is not null
    while (currentNode) {
      // If the value of the current node is equal to the given value
      if (val === currentNode.val) {
        // Return the current node
        return currentNode;
      }

      // If the given value is less than the current node's value
      if (val < currentNode.val) {
        // Set the current node to the left child
        currentNode = currentNode.left;
      } else {
        // If the given value is greater than or equal to the current node's value
        // Set the current node to the right child
        currentNode = currentNode.right;
      }
    }

    // Return undefined if the current node is null, meaning the node was not found
    return undefined;
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  // The findRecursively method that is called externally
  findRecursively(val) {
    // Call the helper method, passing in the root of the tree and the given value
    return this._findRecursively(this.root, val);
  }

  // The helper method that does the actual recursive search
  _findRecursively(node, val) {
    // If the current node is null, return undefined (node not found)
    if (!node) {
      return undefined;
    }

    // If the value of the current node is equal to the given value
    if (val === node.val) {
      // Return the current node
      return node;
    }

    // If the given value is less than the current node's value
    if (val < node.val) {
      // Recursively call the helper method on the left child
      return this._findRecursively(node.left, val);
    } else {
      // If the given value is greater than or equal to the current node's value
      // Recursively call the helper method on the right child
      return this._findRecursively(node.right, val);
    }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  // The dfsPreOrder method that is called externally
  dfsPreOrder() {
    // Initialize an array to store the result of the traversal
    const result = [];
    // Call the helper method, passing in the root of the tree and the result array
    this._dfsPreOrder(this.root, result);
    // Return the result array
    return result;
  }

  // The helper method that does the actual pre-order DFS
  _dfsPreOrder(node, result) {
    // If the current node is null, return
    if (!node) {
      return;
    }

    // Push the current node to the result array
    result.push(node);
    // Recursively call the helper method on the left child
    this._dfsPreOrder(node.left, result);
    // Recursively call the helper method on the right child
    this._dfsPreOrder(node.right, result);
  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    this._dfsInOrder(this.root, result);
    return result;
  }

  _dfsInOrder(node, result) {
    // if the current node is empty, return
    if (!node) {
      return;
    }

    // first traverse the left subtree
    this._dfsInOrder(node.left, result);

    // add the current node to the result array
    result.push(node);

    // then traverse the right subtree
    this._dfsInOrder(node.right, result);
  }


  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    // Initialize an empty array to store the result
    const result = [];
    
    // Call the internal helper method, passing in the root and the result array
    this._dfsPostOrder(this.root, result);
    
    // Return the result array
    return result;
  }
  
  _dfsPostOrder(node, result) {
    // If the current node is null, return immediately
    if (!node) {
      return;
    }
  
    // Recursively call the helper method on the left subtree
    this._dfsPostOrder(node.left, result);
  
    // Recursively call the helper method on the right subtree
    this._dfsPostOrder(node.right, result);
  
    // Add the current node to the result array
    result.push(node);
  }
  

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // Initialize an empty array `result` to store the nodes visited during the BFS
    const result = [];
    
    // Initialize an array `queue` to store the nodes to be visited
    const queue = [];
    
    // If the root of the BST exists, add it to the `queue`
    if (this.root) {
      queue.push(this.root);
    }
    
    // While the `queue` is not empty
    while (queue.length) {
      // Take the first node in the `queue`
      const node = queue.shift();
      
      // Add the node to the `result` array
      result.push(node);
      
      // If the node has a left child, add it to the `queue`
      if (node.left) {
        queue.push(node.left);
      }
      
      // If the node has a right child, add it to the `queue`
      if (node.right) {
        queue.push(node.right);
      }
    }
    
    // Return the `result` array
    return result;
  }
  

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    this.root = this._remove(this.root, val);
    return this;
  }
  
  _remove(node, val) {
    if (!node) {
      return undefined;
    }
  
    if (val < node.val) {
      node.left = this._remove(node.left, val);
      return node;
    } else if (val > node.val) {
      node.right = this._remove(node.right, val);
      return node;
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minRightNode = this._findMinNode(node.right);
        node.val = minRightNode.val;
        node.right = this._remove(node.right, minRightNode.val);
        return node;
      }
    }
  }
  
  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    return this._isBalanced(this.root);
  }
  
  _isBalanced(node) {
    if (!node) {
      return true;
    }
  
    const leftHeight = this._getHeight(node.left);
    const rightHeight = this._getHeight(node.right);
    const heightDifference = Math.abs(leftHeight - rightHeight);
  
    if (heightDifference > 1) {
      return false;
    } else {
      return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
  }
  
  _getHeight(node) {
    if (!node) {
      return -1;
    }
  
    return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
  }
  

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }
  
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.right && !currentNode.right.left && !currentNode.right.right) {
        return currentNode.val;
      }
  
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return currentNode.left.val;
      }
    }
  }
}

module.exports = BinarySearchTree;
