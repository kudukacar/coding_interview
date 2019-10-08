class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const node = new Node(data);
        let current = this.head;

        if(this.head === null) {
            this.head = node;
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        return node;
    }

    insertAt(data, index) {
        const node = new Node(data);
        let current = this.head;

        if(index < 0 || index >= this.size) {
            return false;
        } else if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let i = 1;
            while (i < index) {
                current = current.next;
                i++;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        let prev = this.head;
        let current = this.head.next;

        if(index < 0 || index >= this.size || this.head === null) {
            return false;
        } else if(index === 0) {
            this.head = current;
        } else {
            let i = 1;
            while(i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.data;
    }

    removeElement(data) {
        let prev = this.head;
        let current = this.head.next;

        if(this.head === null) {
            return false;
        } else if(this.head.data === data) {
            this.head = current;
            this.size--;
            return prev;
        } else {
            while(current != null) {
                if (current.data === data) {
                    prev.next = current.next;
                    this.size--;
                    return current;
                }
                prev = current;
                current = current.next;
            }
        }
        return false;
    }

    indexOf(data) {
        let current = this.head;
        let i = 0;
        while(current != null) {
            if(current.data === data) {
                return i;
            }
            i++
            current = current.next;
        }
        return false;
    }
    findMin() {
        if(this.size < 2) {
            return this.head;
        }
        let current = this.head.next;
        let min = this.head;
        while(current) {
            if(current.data < min.data) {
                min = current;
            }
            current = current.next;
        }
        return min;
    }

    topKNumbers(k) {
        if(k >= this.size) {
            return this;
        }
        if(this.size < 2) {
            return this.head;
        }
        const topKList = new linkedList();
        topKList.add(this.head.data);
        k -= 1;
        let current = this.head.next;
        while(current) {
            if(k) {
                if(current.data >= topKList.head) {
                    topKList.add(current.data);
                } else {
                    this.insertAt(current.data, 0);
                }
            } else {
                if(current.data > topKList.head) {
                    topKList.add(current.data);
                    let min = topKList.findMin();
                    let temp = min;
                    temp.next = topKList.head.next;
                    topKList.head = temp;
                    min.data = min.next.data;
                    min.next = min.next.next;
                }

            }
            current = current.next;
        }
        return topKList;

    }

    reverse() {
        if(this.size === 0) {
            return this;
        }
        let prev = null;
        let current = this.head;
        let next = null;

        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;   
    }

    circular() {
        if(this.size < 2) {
            return false;
        }

        let current = this.head.next;

        while(current) {
            if(current === this.head) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    cyclic() {
        if(this.size < 2) {
            return false;
        }
        let fast = this.head.next;
        let slow = this.head;

        while(fast) {
            if(fast === slow) {
                return true;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        return false;
    }
}