class BinaryHeap {
  constructor() {
    this.heapList = [0];
    this.size = 0;
  }

  percUp(i) {
    while(Math.floor(i/2) > 0) {
      if(this.heapList[i] < this.heapList[Math.floor(i/2)]) {
        [this.heapList[i], this.heaplist[Math.floor(i/2)]] = [this.heapList[Math.floor(i/2), this.heapList[i]]];
      }
      i = Math.floor(i/2);
    }
  }

  insert(k) {
    this.heapList.push(k);
    this.size++;
    this.percUp(this.size);
  }

  minChild(i) {
    if(i * 2 + 1 > this.size || this.heapList[i * 2] < this.heapList[i * 2 + 1]) {
      return i * 2;
    } else {
        return i * 2 + 1;
      }
  }

  percDown(i) {
    while(i * 2 <= this.size) {
      min = this.minChild(i);
      if(this.heapList[min] < this.heapList[i]) {
        [this.heapList[min], this.heapList[i]] = [this.heapList[i], this.heapList[min]];
      }
      i = min;
    }
  }

  deleteMin() {
    min = this.heapList[1];
    this.heapList[1] = this.heapList[this.size];
    this.heapList.pop();
    this.size -= 1;
    this.percDown(1);
    return min;
  }


}