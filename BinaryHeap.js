class MaxBinaryHeap{
constructor(){
   this.data = []; 
}


insert(value){
    this.data.push(value);
    var idx = this.data.length - 1;
    // var element = this.data[idx];
    while(idx > 0){
        var parentIdx = Math.floor((idx-1)/2);
        // var parent  = this.data[parentIdx];
        if(this.data[idx] <=  this.data[parentIdx]) break;
        // this.data[parentIdx] = element;
        // this.data[idx] = parent;
        var temp = this.data[parentIdx];
        this.data[parentIdx] = this.data[idx];
        this.data[idx] = temp;
        idx = parentIdx;
        
    }
}

extractMax(){
    let max = this.data[0];
    let end = this.data.pop();
    if(this.data.length > 0){
        this.data[0] = end;
        this.sinckDown();
    }
    return max;
}

sinckDown(){
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];
    while(true){
        let leftChildIdx = 2*idx + 1;
        let rightChildIdx = 2*idx + 2;
        let rightChild, leftChild;
        let swap = null;
        if(leftChildIdx < length){
            leftChild = this.data[leftChildIdx];
            if(leftChild > element){
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < length){
            rightChild = this.data[rightChildIdx];
            if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.data[idx] = this.data[swap];
        this.data[swap] = element;
        idx = swap;
        
    }
}
}

var heap = new MaxBinaryHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(199);

console.log("Before sinckDown", heap);
console.log("extractMax",heap.extractMax());
console.log("After sinckDwon",heap);