function populatePhoneNum (arr) {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}

console.log(populatePhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// This function takes in an array of nums 1-9. 
// It uses the slice() method to return a shallow copy of a portion of the array using specified indexies. 
// We use temperate literals to add spaces and dashes as needed. 