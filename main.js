// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

function numToString(num) {
  // console.log(typeof num)
  return num.toString()
}

const runNumToString = () => console.log(numToString(8))

// const stringAsNumber = numToString(42)
// console.log(typeof stringAsNumber)





// Write a JavaScript program to convert a string to the number.

const convertNum = (string) => Number(string)

const runConvertNum = () => console.log(convertNum("9"))


// console.log(convertNum('5'))

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const whatTypeOf = (data) => {
    return typeof data
  }

  const runWhatTypeOf = () => {
    console.log(whatTypeOf(false))
  }
  
  // console.log(whatTypeOf(1))
  // console.log(whatTypeOf('hat'))
  // console.log(whatTypeOf(null))
  // console.log(whatTypeOf(false))





  
// Write a JavaScript program that adds 2 numbers together.

const numAdd = (x, y) => {
  return x + y
}

const runNumAdd = () => {
  console.log(numAdd(128, 345))
}

// console.log(numAdd(12, 24))

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (x, y) => {
  if (x && y) {
    return true
  } else {
    return undefined
  }
}

const runBothTrue = () => {
  console.log(bothTrue(5, 7))
}

// console.log(bothTrue(3, 'hi'))

// Write a JavaScript program that runs when 1 of 2 things are true.

const eitherTrue = (x, y) => {
  if (x || y) {
    return "One is true"
  } else {
    return undefined
  }
}

const runEitherTrue = () => {
  console.log(eitherTrue(3, -0))
}

// console.log(eitherTrue('True', -0))
// Write a JavaScript program that runs when both things are not true.  

const notTrue = (x, y) => {
  if (!x && !y) {
    return "Both are not true"
  } else {
    return "True :("
  }
}

const runNotTrue = () => {
  console.log(notTrue('', -0))
}

// console.log(notTrue('', -0))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
