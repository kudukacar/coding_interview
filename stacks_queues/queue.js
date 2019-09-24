class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.items.length === 0) {
            return "queue is empty";
        }
        return this.items.shift();
    }

    front() {
        if(this.items.length === 0) {
            return "queue is empty";
        }

        return this.items[0];
    }
}