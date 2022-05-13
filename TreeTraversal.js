class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(!current.right){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    
    BFS(){
        var node = this.root;
        var queue = [];
        var data = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data;
    }

//Depth first search
DFSPreOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

DFSPostOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(current);
    return data;
}

DFSInOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

}

var TreeTraversal = new Tree();
TreeTraversal.insert(10)
TreeTraversal.insert(6)
TreeTraversal.insert(15)
TreeTraversal.insert(3)
TreeTraversal.insert(8)
TreeTraversal.insert(20)

console.log(TreeTraversal);
console.log("BFS",TreeTraversal.BFS());
console.log("DFSPREORDER",TreeTraversal.DFSPreOrder());
console.log("DFSPOSTORDER",TreeTraversal.DFSPostOrder());
console.log("DFSINORDER",TreeTraversal.DFSInOrder());


