/**
 * Creates a 2D array of the given dimension and fills each item with the 
 * provided message
 */
function gridOfStrings(numRows, numCols, message) {
    const grid = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(message);
        }
        grid.push(row);
    }

    return grid;
}


/**
 * Calculates the total of 2D array.
 */
function sumAll(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
    }

    return total;
}


/**
 * Sums the inner arrays in a 2D array of numbers.
 */
function sumInner(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let innerSum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            innerSum += arr[i][j];
        }
        result.push(innerSum);
    }

    return result;
}


/**
 * Reverses the order of the nested arrays. The order of items within each nested array is
 * preserved.
 */
function flip(arr) {
    const flipped = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        flipped.push(arr[i]);
    }

    return flipped;
}
