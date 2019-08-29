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
        }else if(index === 0) {
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
}