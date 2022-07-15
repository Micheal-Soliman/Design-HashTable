class HashTable {
    constructor() {
        this.table = new Array(127)
        this.size = 0
    }
    _hashFunction(key){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }
    set (key, value) {
        const index = this._hashFunction(key)
        this.table[index] = [key, value]
        this.size++
    }
    get (key){
        const index  = this._hashFunction(key)
        return this.table[index]
    }
    remove(key) {
        const index = this._hashFunction(key)
        if (this.table[index] && this.table[index].length) {
            console.log(this.table[index].length)
            this.table[index] == undefined
            this.size--
            return true
        } else {
            return false
        }
    }
}