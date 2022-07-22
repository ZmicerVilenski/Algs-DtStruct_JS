const arr = [5,7,8,4,2,3,6,5,1,25,54,7,85,652,4,2,4];
let count = 0;

function linearSearch(array, item) {

    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }

    return null;

}

console.log(linearSearch(arr, 25));
console.log('Iterations = ', count);
console.log('Algorithm complexity - O(n)');
