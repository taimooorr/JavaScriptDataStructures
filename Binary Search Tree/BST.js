/*
* Tree Data Structure
*
* All Data point in Tree are called nodes
*
* 1st node is the root node or parent node
* 2nd node is the left child node
* 3rd node is the right child node
* sub tree is the child node of the parent node
* leaf node is the node that has no child node
* sibling node is the node that has the same parent node
* */


/*
* lETS Talk about Binary Search Tree
* In Binary Search Three every node has two child nodes
* Bianry seach tree are ordered binary tree
* each left sub node  tree is less than or equal to the parent node
* and each right sub node tree is greater than or equal to the parent node
* */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
    }

    /*
    we can use both of the below method

    isPresent(data) {
         let current = this.root;
         while(current.data !== data){
             if(data<current.data){
                 current = current.left;
             }
             else {
                 current = current.right;
             }
             if(current === null){
                 return false;
             }
         }
         return true;
     }
     */
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                //if node has no child
                if (node.left === null && node.right === null) {
                    return null;
                }
                //node has no left child
                if (node.left === null) {
                    return node.right;
                }
                //node has no right child
                if (node.right === null) {
                    return node.left;
                }
                //node has two child
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        ;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
        ;
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        ;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
        ;
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }

            traverseInOrder(this.root);
            return result;
        }
        ;
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        }
        ;
    }

    postOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();

            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        //also called breadth first search
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                }
                ;
                if (node.right != null) {
                    Q.push(node.right);
                }
                ;
            }
            ;
            return result;
        } else {
            return null;
        }
        ;
    };
}

//lets use it
const bst = new BST();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(2);
bst.add(20);
bst.add(19);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(15));
console.log(bst.isBalanced());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());


