function hasTargetSum(array, target) {
    // Create an object for nums already seen
const seenNumbers = {};
    // iterate through each number in array
  for (let i = 0; i < array.length; i++) {
    // for current number, identify complement that adds to the target  (complement = target - num)
    const complement = target - array[i];
    // check if any key on object is our complement
    if (seenNumbers[complement]) return true
    // if so, return true 
    // otherwise, add that number to the object
    seenNumbers[array[i]] = true;
  }
    // if reached the end of array, return false
    return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2) *not great as array gets bigger
  space: O(n)
*/

/* 
Psueodocode 

  - Create an object for nums already seen
  - iterate through each number in array
  - for current number, identify complement that adds to the target  (complement = target - num)
  - icheck if any key on object is the complement 
    - if so, return true 
    - otherwise, add that number to the object 

  - if reached the end of array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
