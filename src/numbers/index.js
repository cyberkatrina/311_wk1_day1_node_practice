const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
}

const sum = (arr) => 
  arr.reduce((accumulator, num) => {
    return accumulator += num
}, 0)

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}