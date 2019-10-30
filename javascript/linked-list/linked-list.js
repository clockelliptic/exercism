export function LinkedList(){
  this.size = 0
  this.head = this.tail = null 
}

const Node = function(val) {
  this.val = val
  this.prev = null
  this.next = null
}

LinkedList.prototype.push = function(val){
  let node = new Node(val)

  if(this.size == 0) this.head = this.tail = node
  else [this.tail.next, node.prev, this.tail] = [node, this.tail, node];

  this.size++
}

LinkedList.prototype.pop = function(){
  this.size--
  let ret = this.tail

  if(this.size > 0) [this.tail, this.tail.next] = [this.tail.prev, null]
  else this.reset_head_tail();

  return ret.val
}

LinkedList.prototype.shift = function(){
  this.size--
  let ret = this.head

  if(this.size > 0) [this.head, this.head.prev] = [this.head.next, null]
  else this.reset_head_tail();

  return ret.val
}

LinkedList.prototype.unshift = function(val){
  let node = new Node(val)

  if(this.size == 0) this.head = this.tail = node
  else [this.head.prev, node.next, this.head] = [node, this.head, node]

  this.size++
}

LinkedList.prototype.count = function(){
  return this.size
}

LinkedList.prototype.delete = function(val){
  let curr_node = this.head;
  while(curr_node){ 
    if(curr_node.val != val) curr_node = curr_node.next
    else break
  }

  if (this.size == 1) this.reset_head_tail()
  else if (curr_node == this.head) [this.head, this.head.prev] = [curr_node.next, null]
  else if (curr_node == this.tail) [this.tail, this.head.next] = [curr_node.prev, null]
  else [curr_node.prev.next, curr_node.next.prev] = [curr_node.next, curr_node.prev];

  if(curr_node) this.size--
}

LinkedList.prototype.reset_head_tail = function(){
  this.head = this.tail = null
}