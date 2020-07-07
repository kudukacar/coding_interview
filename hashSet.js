class hashSet {
    constructor(limit = 8) {
        this.storage = new Array(8);
        this.limit = limit;
    }

    hashCode(string) {
        const length = string.length;
        const hash = 0;
        if(length === 0) {
            return hash;
        }
        for(let i = 0; i < length; i++) {
            hash += string.charCodeAt(i) * i;
        }

        return hash;
    }

    add(string) {
        const index = this.hashCode(string) % this.limit;
        const bucket = this.storage[index];
        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i] === string) {
                    return;
                }
            }
            bucket.push(string);
        } else {
            bucket = [string];
        }

    }

    get(string) {
        const index = this.hashCode(string) % this.limit;
        const bucket = this.storage[index];
        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i] === string) {
                    return true;
                }
            }
        }
        return false;
    }


}