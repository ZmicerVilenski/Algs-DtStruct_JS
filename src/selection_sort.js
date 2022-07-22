const arr = [0,3,2,5,7,8,1,9,4,2,4,2,9,6,4,1,7,-1,-15,25,6,2,35,6,3,32,-80]; // [0,1,2,2,2,3.......]
let count = 0;

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp;
    }

    return arr;

}

console.log(selectionSort(arr));
console.log('arr.length = ', arr.length);
console.log('Iterations = ', count);

console.log('Algorithm complexity - O(n*n)');
