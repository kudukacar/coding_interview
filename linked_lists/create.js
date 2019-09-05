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
}