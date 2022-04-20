class Node{
  //piece of data ---> val 
  // refrence to next node ---> next 
  constructor(val){
    this.val = val;
    this.next = null;
  }
  
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;

    }
    else{
      this.tail.next = newNode;
      this.tail = newNode
    }

    this.length++
    return this;

  }
  pop(){
    if(!this.head) return undefined;

    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return current;

  }

// Removing node from the beginning of the list
shift(){
if(this.length===0) return undefined;

var currentHead = this.head;
this.head = currentHead.next;
this.length--;
if(this.length === 0)
  this.tail = null;
return currentHead;
}

//Adding the new node from the beginning of the list
unshift(val){
var newNode = new Node(val);
if(!this.head){
  this.head = newNode;
  this.tail = newNode;
}
newNode.next = this.head;
this.head = newNode;
this.length++;
return this;
}
 
get(idx){
if(idx < 0 || idx >= this.length) return null;
var counter = 0;
var current = this.head;
while(counter !== idx){
  current = current.next;
  counter++;
}
return current;
}

set(idx,value){
foundNode = this.get(idx);
if(foundNode){
  foundNode.val = value;
  return true;
}
return false;
}

Insert(idx,val){
 if(idx < 0 || idx > this.lenth) return false;
 if(idx === this.length){
   this.push(val);
   return true;
 }
 if(idx === 0){
   this.unshift(val);
   return true;
 }
 var newnode = new Node(val);
 //we can use our get function for below code till while loop
 // var prevnode = this.get(idx-1); 
 var prevNode = this.head;
 var count = 0;
 while(count !== idx){
   prevNode = prevNode.next;
   count++;
 }
 var temp = prevNode.next;
 prevNode.next = newNode;
 newNode.next = temp;
 this.length++;
 return true;
}
}

var list = new SinglyLinkedList();
list.push("hello");
