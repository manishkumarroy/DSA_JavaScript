class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }

    pop(){
    if(!this.first) return null;
    var current = this.first;
    if(this.size === 1){
        this.first = null;
        this.last = null;
    } 
    this.first = current.next;
    this.size--
    return current.val;
}
}