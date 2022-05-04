class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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

    find(value){
        if(!this.root) return false;
        var current = this.root;
        
        while(current){
            if(value < current.value){
                if(!current.left){
                    return false;
                }
                else{
                    current = current.left;
                }
            }
            else if(value > current.value){
                if(!current.right){
                    return false;
                }
                else{
                    current = current.right;
                }
                
            }
            else{
                return true;
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(8)
tree.insert(20)
tree.insert(9)
tree.insert(15)
console.log(tree);