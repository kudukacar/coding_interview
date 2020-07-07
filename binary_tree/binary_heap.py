class BinaryHeap:
    def __init__(self):
        self.heap_list = [0]
        self.current_size = 0

    def perc_up(self, i):
        while i // 2 > 0:
            if self.heap_list[i] < self.heap_list[i // 2]:
                self.heap_list[i], self.heap_list[i //
                                                  2] = self.heap_list[i // 2], self.heap_list[i]
            i = i // 2

    def insert(self, k):
        self.heap_list.append(k)
        self.current_size += 1
        self.perc_up(self.current_size)

    def min_child(self, i):
        if i * 2 + 1 > self.current_size:
            return i * 2
        else:
            if self.heap_list[i * 2 + 1] < self.heap_list[i * 2]:
                return i * 2 + 1
            else:
                return i * 2

    def perc_down(self, i):
        while i * 2 <= self.current_size:
            min_child = self.min_child(i)
            if self.heap_list[min_child] < self.heap_list[i]:
                self.heap_list[min_child], self.heap_list[i] = self.heap_list[i], self.heap_list[min_child]
            i = min_child

    def del_min(self, i):
        min = self.heap_list[1]
        self.heap_list[1] = self.heap_list[self.current_size]
        self.current_size -= 1
        self.heap_list.pop()
        self.perc_down(1)
        return min
