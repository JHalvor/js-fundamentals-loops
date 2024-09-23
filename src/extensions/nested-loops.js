const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]
for (let i = START; i <= END; i++) {
  simpleOne.push(i)
}

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let c = 0; c < i; c++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let c = i; c >= 1; c--) {
    innerArray.push(c)
  }
  nestedTwo.push(innerArray)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for (let x = START; x <= END; x++) {
  const outerArray = []
  for (let y = START; y <= x; y++) {
    const innerArray = []
    for (let z = START; z <= y; z++) {
      innerArray.push(x)
    }
    outerArray.push(innerArray)
  }
  deepOne.push(outerArray)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for (let x = START; x <= END; x++) {
  const outerArray = []
  for (let y = START; y <= x; y++) {
    const innerArray = []
    for (let z = START; z <= y; z++) {
      innerArray.push(z)
    }
    outerArray.push(innerArray)
  }
  deepTwo.push(outerArray)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for (let x = START; x <= END; x++) {
  const outerArray = []
  for (let y = START; y <= x; y++) {
    let innerArray = []
    for (let z = START; z <= y; z++) {
      innerArray.push(z)
    }
    let sum = 0
    for (let i = 0; i < innerArray.length; i++) {
      sum += Math.pow(innerArray[i], 2)
    }
    innerArray = [sum / innerArray.length]
    outerArray.push(innerArray)
  }
  deepThree.push(outerArray)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
