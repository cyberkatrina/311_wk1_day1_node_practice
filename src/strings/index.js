const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = str.split("")
  let newArray = []
  for (i = 0; i < arr.length; i += 2) {
    let pair = arr[i] + arr[i + 1]
    newArray.push(pair)
  }
  return newArray
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}