function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();  
    }, 
    printStack() {
      stack.forEach(element => {
        console.log(element);
      });
    }
  }
}

let stick = newStack();
stick.push(4);
stick.push(3);
stick.printStack();
console.log(stick.pop());
stick.printStack();