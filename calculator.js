function calculator(input) {
    //Turn input into array of strings
    let inputString = input.split(' ')
    console.log(inputString)
    //Create empty array to hold input as numbers
    let stack = []
    
    //Loop through each array of strings and check for operator
    inputString.forEach(num => {
        //If parameter is an operator, add the two indices, push to the array, and pop the last index for our result
        if (num === "+") {
          stack.push(stack.pop() + stack.pop())
          console.log(stack, "this is after the addition")
        } else if (num === '*') {
          stack.push(stack.pop()* stack.pop())
          console.log(stack, "this is multiplication stack")
        } else if (num === '/') {
            if (stack[1] === 0) {
              console.log("Can not divide by 0")
            }else {
              stack.push(stack.pop() / stack.pop())
              console.log(stack, "this is division stack")
        }
        } else if (num === '-') {
            stack.push(stack.pop()- stack.pop())
            console.log(stack, "this is subtraction stack")
        } else {
            //If parameter is a number, add it to the stack array as an int
            stack.push(parseInt(num))
            console.log(stack, "this is the stack first")
        }
    })
    console.log(stack)
    return stack
}
