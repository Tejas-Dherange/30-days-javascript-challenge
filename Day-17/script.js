// Task 1,2 ==> LinkedList
// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }

// }
// {class singly{
//     constructor(){
//         this.head=null;
//     }

//     push(val){
//         const newNode=new Node(val);
//         if(this.head==null){
//             this.head=newNode;
//             return;
//         }
//         let currNode=this.head;
//         while(currNode.next!=null){
//             currNode=currNode.next;
//         }
//         currNode.next=newNode;
//     }

//     pop(){

//         if(this.head==null){
//             console.log("List is empty");
//             return;
//         }
//         let currNode=this.head;
//         let prev;
//         while(currNode.next!=null){
//             prev =currNode;
//             currNode=currNode.next;
//         }
//         prev.next=null;
//     }
//     display(){
//         console.log("This is list :");
//         if(this.head==null){
//            console.log("List is empty");
//            return;
//         }
//         let currNode=this.head;
//         while(currNode!=null){
//             console.log(currNode.val);
//             currNode=currNode.next;
//         }
//     }
// }

// const list=new singly();
// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// list.display();
// list.pop();
// list.display();}

// Task 3,4 ==> STACK

//Task 3
// {class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class stack{
//     constructor(){
//         this.next=null;
//         this.top=null;
//     }

//     push(data){
//         const newNode=new Node(data);
//         if(this.top==null){
//             this.top=newNode;
//             return;
//         }
//         newNode.next=this.top;
//         this.top=newNode;
//     }
//     pop(){
//         if(this.top==null){
//            console.log("Stack is empty");
//             return;
//         }
//         let poped= this.top.data;
//         this.top=this.top.next;
//         return poped;

//     }
//     peek(){
//         if(this.top==null){
//             console.log("Stack is empty");
//              return;
//          }
//          console.log("Peek element is",this.top.data);
//     }
//     display(){
//         console.log("This is a Stack");
//         let current=this.top;
//         if(current==null){
//             console.log("Stack is empty");
//              return;
//          }
//          while(current!=null){
//             console.log(current.data);
//             current=current.next;
//          }
//     }
// }

// const stk=new stack();
// stk.push(11);
// stk.push(12);
// stk.push(13);
// stk.push(14);
// stk.push(15);
// stk.display();
// stk.peek();
// stk.pop();
// stk.display();
// stk.peek();

// //Task 4

// let str="Tejas";
// const stk2=new stack();
// for (let i = 0; i < str.length; i++) {
//     let char=str[i];
//     stk2.push(char);
// }
// stk2.display();
// let rev=[];
// for (let i = 0; i < str.length; i++) {
//     rev[i]=stk2.pop();
// }
// console.log(rev.join("").toString());}

//task 5 ==> Queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  Enqueue(data) {
    const newNode = new Node(data);
    if (this.front == null && this.rear == null) {
      this.front = this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  Dequeue() {
    if (this.front == null) {
      console.log("Queue is empty");
      return ;
    }
    let DequedData=this.front.data;
    this.front=this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return DequedData;
  }

  display(){
    console.log("This is a Queue");
    if (this.front == null && this.rear == null) {
        console.log("Queue is empty");
        return;
      }
      let current=this.front;
      do {
        console.log(current.data);
        current=current.next;
      } while (current!=null);
  }
  first(){
    console.log("This is a front of queue:",this.front.data);
  }
  isEmpty(){
    return this.front==null;
  }
}
const qu=new Queue();
qu.Enqueue(78);
qu.Enqueue(79);
qu.Enqueue(80);
qu.display();
qu.Dequeue();
qu.display();
qu.first();


//Task 6
const qu2=new Queue();
function addPrintTasks(tasks){
  console.log("Scheduling tasks.......");
  for (const task of tasks) {
    qu2.Enqueue(task);
  }
}
function print(){
    while(!qu2.isEmpty()){
      const current=qu2.Dequeue()
      console.log(current);
    }
}
let tasks=["D1.pdf","D2.pdf","D3.pdf","D4.pdf","D5.pdf"]
addPrintTasks(tasks);
console.log("Scheduled task ",)
qu2.display()
print();
console.log("All tasks are completed thst why :");
qu2.display()


//Task 7,8,9,10
/*
Todo tasks:
           1)Binary tree
           2)Trees
           3)Graphs
*/
