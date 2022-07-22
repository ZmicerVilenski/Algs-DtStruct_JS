const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function binarySearch(arr, item) {

    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;

    while (!found && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            found = true;
            position = middle;

            return position;

        }
        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;

}

function recursiveBinarySearch(arr, item, start, end) {

    let middle = Math.floor((start + end) / 2);
    count ++;
    if (item === arr[middle]) {
        return middle;
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, 0, middle - 1 );
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end );
    }

}

let count = 0;
console.log('Binary search:');
console.log(binarySearch(arr, 2));
console.log(count);

count = 0;
console.log('Recursive binary search:');
console.log(recursiveBinarySearch(arr, 1, 0, arr.length));
console.log(count);

console.log('Algorithm complexity - O(log2n)');