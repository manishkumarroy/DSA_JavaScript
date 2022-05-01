class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
            
        }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

pop(){
if(!this.head){
    return undefined;
}
var currentTail = this.tail;
if(this.length === 1){
this.head = null;
this.tail = null;
}
else{
this.tail = currentTail.prev;
this.tail.next = null;
currentTail.prev = null; 
}
this.length--;
return currentTail;
}

shift(){
if(this.length === 0) return undefined;
var oldHead = this.head;
if(this.length === 1){
    this.head = null;
    this.tail = null;
}
else{
this.head = oldHead.next;
oldHead.next = null;
this.head.prev = null;
}
this.length--;
return oldHead;
}

unshift(val){
var newNode = new Node(val);
if(this.length === 0){
    this.head = newNode;
    this.tail = newNode;
}
else{
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
}
this.length++;
return this;
}

get(idx){
if(idx < 0 || idx >= this.length) return null;
if(idx <= this.length/2){
    var count = 0;
    var current = this.head;
    while(count !== idx){
        current = current.next;
        count++;
    }
}else{
    var count = this.length-1;
    var current = this.tail;
    while(count !== idx){
        current = current.prev;
        count--;
    }
}
return current;
}
set(idx, val){
var foundNode = this.get(idx);
if(foundNode !== null){
    foundNode.val = val;
    return true;
}
return false;
}

insert(idx, val){
    if(idx < 0 || idx > this.length)
        return false;
    if(idx === 0){
        this.unshift(val);
        return true;
    }
    if(idx === this.length){
        this.push(val);
        return true;
    }
    var newNode = new Node(val);
    var prevNode = this.get(idx-1);
    var nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
}

remove(idx){
    if(idx < 0 || idx > this.length) return undefined;
    if(idx === 0) return this.shift();
    if(idx === this.length) return this.pop();
    var prevNode = this.get(idx-1);
    var removedNode = prevNode.next;
    var nextNode = this.get(idx+1);
    prevNode.next = removedNode.next;
    nextNode.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prv = null;
    this.length--;
    return removedNode
    
}

 print(){
  var arr = [];
  var current = this.head;
  while(current){
   arr.push(current.val);
   current = current.next;
  }
  console.log(arr);
 }

reverse(){
    if(!this.head) return undefined;
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for(var i = 0; i < this.length; i++){
        next = node.next;
        node.prev = next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return this;
}
    
    
}

var list = new DoublyLinkedList();

