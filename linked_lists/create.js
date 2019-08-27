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
        }

        current.next = node;

        this.size++;
    }


}