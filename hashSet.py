class hashSet:
    def __init__(self, limit):
        self.limit = limit
        self.storage = [None for x in range(limit)]

    def hash_code(self, word):
        length = len(word)
        hash = 0

        if length == 0:
            return hash

        for i in range(length):
            hash += ord(word[i]) * i

        return hash

    def add(self, word):
        index = self.hash_code(word) % self.limit
        bucket = self.storage[index]

        if(bucket):
            for i in range(len(bucket)):
                if bucket[i] == word:
                    return
            bucket.append(word)
        else:
            bucket = [word]

    def get(self, word):
        index = self.hash_code(word) % self.limit
        bucket = self.storage[index]
        if(bucket):
            for in in range(len(bucket)):
                if bucket[i] == word:
                    return True
        return False
