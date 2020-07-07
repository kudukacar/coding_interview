class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def add(self, data):
        node = Node(data)

        if self.head == None:
            self.head = node
        else:
            current = self.head
            while(current.next):
                current = current.next
            current.next = node

        self.size += 1
        return node

    def insert_at(self, data, index):
        node = Node(data)

        if index >= self.size:
            return False
        elif(index == 0):
            node.next = self.head
            self.head = node
        else:
            current = self.head
            i = 1
            while i < index:
                current = current.next
                i += 1
            node.next = current.next
            current.next = node
        self.size += 1

    def remove_from(self, index):
        previous = self.head
        current = self.head.next
        if index >= self.size or self.head == None:
            return False
        elif(index == 0):
            self.head = current
        else:
            i = 1
            while i < index:
                previous = current
                current = current.next
                i += 1
            previous.next = current.next
        self.size -= 1
        return current.data

    def remove_element(self, data):
        previous = self.head
        current = self.head.next
        if self.head == None:
            return False
        elif self.head.data == data:
            self.head = current
            self.size -= 1
            return previous
        else:
            while(current != None):
                if current.data == data:
                    previous.next = current.next
                    self.size -= 1
                    return current
                previous = current
                current = current.next
        return False

    def index_of(self, data):
        current = self.head
        i = 0
        while(current != None):
            if current.data == data:
                return i
            current = current.next
            i += 1

        return False

    def find_min(self):
        if self.size < 2:
            return self.head
        min = self.head
        current = self.head.next
        while current != None:
            if current.data < min.data:
                min = current
            current = current.next
        return min

    def topKNumber(self, k):
        if k <= self.size or self.size < 2:
            return self
        else:
            linkedList = LinkedList()
            linkedList.add(self.head.data)
            current = self.head.next
            k -= 1
            while(current):
                if k:
                    if current.data > linkedList.head.data:
                        linkedList.add(current.data)
                    else:
                        linkedList.insert_at(current.data, 0)
                else:
                    if current.data > linkedList.head.data:
                        linkedList.add(current.data)
                        min = linkedList.find_min()
                        temp = min
                        temp.next = linkedList.head.next
                        linkedList.head = temp
                        min.data = min.next.data
                        min.next = min.next.next
                current = current.next

    def reverse(self):
        if self.size < 2:
            return self
        else:
            previous = None
            current = self.head
            next_node = None

            while current != None:
                next_node = current.next
                current.next = previous
                previous = current
                current = next_node

            self.head = previous

    def circular(self):
        if self.size < 2:
            return False

        current = self.head.next

        while current:
            if current == self.head:
                return True

            current = current.next

        return False

    def cyclic(self):
        if self.size < 2:
            return False

        fast = self.head.next
        slow = self.head

        while fast:
            if fast == slow:
                return True
            fast = fast.next.next
            slow = slow.next

        return False
