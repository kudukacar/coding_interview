class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode (this.root, newNode);
        }

    }

    insertNode(node, newNode) {
        if(newNode.data < node) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if(node === null) {
            return null;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            } else if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            } else {
                let min = this.findMinNode(node.right);
                node.data = min.data;
                node.right = this.removeNode(node.right, min.data);
                return node;
            }
        }
    }

    findMinNode(node) {
        if(node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    search(node, data) {
        if(node === null) {
            return false;
        }

        if(node.data === data) {
            return node;
        }
        if(data < this.node.data) {
            this.search(this.node.left, data);
        } else {
            this.search(this.node.right, data);
        }
    }

    createBalancedBST(linkedList) {
        if(linkedList.head === null || linkedList.head.next === null) {
            return new Node(linkedList.head.data);
        }
        let fastNode = linkedList.head.next;
        let slowNode = linkedList.head;
        while(fastNode !== null) {
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
        }
        const rightLinkedList = slowNode.next.next;
        const root = new Node(slowNode.next.data);
        slowNode.next = null;
        root.left = this.createBalancedBST(linkedList);
        root.right = this.createBalancedBST(rightLinkedList);
        return root;
    }

    preorderSearch(node, data) {
        if(node === null) {
            return false;
        }

        if(node.data === data) {
            return node;
        }
        this.preorderSearch(node.left, data);
        this.preorderSearch(node.right, data);
    }
    
}