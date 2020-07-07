class Node:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        new_node = Node(data)

        if(self.root == None):
            self.root = new_node
        else:
            self.insert_node(self.root, new_node)

    def insert_node(self, node, new_node):
        if new_node.data < node.data:
            if node.left == None:
                node.left = new_node
            else:
                self.insert_node(node.left, new_node)
        else:
            if node.right == None:
                node.right = new_node
            else:
                self.insert_node(node.right, new_node)

    def remove(self, data):
        self.root = self.remove_node(self.root, data)

    def remove_node(self, node, data):
        if node.data == None:
            return None
        elif data > node.data:
            node.right = self.remove_node(node.right, data)
        elif data < node.data:
            node.left = self.remove_node(node.left, data)
        else:
            if node.left == None and node.right == None:
                node == None
                return node
            elif node.left == None:
                node = node.right
                return node
            elif node.right == None:
                node = node.left
                return node
            else:
                min = self.find_min_node(node.right)
                node.data = min.data
                node.right = self.remove_node(node.right, min.data)

    def find_min_node(self, node):
        if node.left == None:
            return node
        else:
            self.find_min_node(node.left)

    def search(self, node, data):
        if node == None:
            return False
        elif node.data == data:
            return node
        else:
            if data > node.data:
                self.search(node.right, data)
            else:
                self.search(node.left, data)
