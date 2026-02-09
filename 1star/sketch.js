function setup() {
    createCanvas(400, 300);
}


/**
 * Creates an array and fills it with integers from 0 up to but not 
 * including maxValue.
 * @param {number} maxValue 
 * @returns {number[]} An array of integers from 0 to maxValue (exclusive).
 * @example
 * // returns [1, 2, 3, 4]
 * maxValue(5);
 */
function fillArray(maxValue) {
    const arr = [];
    for (let i = 0; i < maxValue; i++) {
        arr.push(i);
    }
    return arr;
}


/**
 * Searches an array for a given value. 
 * @param {any[]} arr An array storing any type of element (e.g. numbers, strings)
 * @param {any} value The value to search for
 * @returns {boolean} True if the value is found, false if it is not.
 */
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}


/**
 * Gets the total of all items in a number array.
 * @param {number[]} arr 
 * @returns {number} The total of all items
 */
function total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


/**
 * Counts the number of times the given value appears in the array.
 * @param {any[]} arr The array to search.
 * @param {any} value The value to count.
 * @returns {number} The number of times the value appears.
 */
function count(arr, value) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            counter++;
        }
    }
    return counter;
}


/**
 * Creates a new array that repeats the values in the original array the specified number 
 * of times.
 * @param {any[]} arr The array to repeat 
 * @param {number} times The number of times to repeat the array values
 * @returns {any[]} A new array
 */
function repeat(arr, times) {
    const result = [];
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < arr.length; j++) {
            result.push(arr[j]);
        }
    }
    return result;
}
