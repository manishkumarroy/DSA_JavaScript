class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queues{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.first) return null;
        var current = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
             this.first = current.next;
             this.length--;
             return current.val;
    }
}

var q = new Queues();
