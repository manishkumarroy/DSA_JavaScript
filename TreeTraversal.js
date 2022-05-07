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
}

var TreeTraversal = new Tree();
TreeTraversal.insert(10)
TreeTraversal.insert(6)
TreeTraversal.insert(15)
TreeTraversal.insert(3)
TreeTraversal.insert(8)
TreeTraversal.insert(20)

console.log(TreeTraversal);
console.log(TreeTraversal.BFS());


