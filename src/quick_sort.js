const arr = [0,3,2,5,4,8,25,9,8,2,1,2,11,6,4,1,7,-15,-5,23,6,2,35,6,-3,32,91,4,7,1,2,9,6,2,1,7,-1,-5,23,9,4,5,1,2,9,6,4,1,7,-4,-5,23,18];
let count = 0;

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
        count++;
        if(i === pivotIndex)
            continue;
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];

}

console.log(quickSort(arr));
console.log('arr.length = ', arr.length);
console.log('Iterations = ', count);

console.log('Algorithm complexity - O(?)');
