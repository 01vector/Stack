'use strict'

/*
P.S. We are going to use an array for easy reading but an usage a linked list is better because the linked list allows to improve our structure.
*/

class Stack { 
    constructor(...start_elements) {
        this.stack = start_elements.length > 0 ? start_elements : [];  // creating a queue
        this.tail = start_elements.length;  //  creating an index of a last element of the queue (tail pointer)
    }

    sPush(...element) {  //  to add element into the end (top) of the stack.
        this.tail += element.length;
        this.stack.push(...element);
    }

    sPop() {  //  to return element of the end (top) of the stack.
        this.tail--;
        return this.stack.pop();
    }

    sPeek() {  //  to return element of the end (top) of the stack but doesn't delete this item.
        return this.stack[this.stack.length - 1];
    }

    sCount() {  //  to return a number of elements of the stack (depth of the stack).
        return this.tail;
    }
}

//========================= TEST ================================//


/**
 * The function checks an input string
 * 
 * @param {string} code_string String for a check
 * @returns {boolean} 'true' if correct and 'false' if incorrect
 */
const checkSyntax = (code_string) => {
    let stack = new Stack();  //  init stack

    for (const char of code_string) {
        if (char === '(') stack.sPush(char);  //  add '(' into the stack
        else if (char === ')') {  //  extract ')' from the stack
            if (!stack.sPop()) false;  //  if (stack.pop() === false) false;
        }
    }
    return !!!stack.sCount();  //  if stack size > 0 return 'false' and 'true' otherwise
}


// Correct brackets. Return true.
console.log(checkSyntax(`console.log( anyFunction( str.split(', ')))`));

// Incorrect brackets. Return false.
console.log(checkSyntax('((( ... ))'));

// Incorrect brackets. Return false.
console.log(checkSyntax('(( ... )))'));
