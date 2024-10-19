const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkNegRow(nums: number[]): Promise<string> {
    return new Promise((resolve, reject) => {
        if (nums.length === 0) {
            reject("Empty array is an invalid input...");
        }
        nums.forEach((num) => {
            if (num < 0) {
                console.log('Row contains negative number: ', nums);
            }
        });
    });
}

function checkNeg2dArray(arr: number[][]): Promise<string[]> {
    const promises = arr.map(row => checkNegRow(row));

    return Promise.all(promises)
}

checkNeg2dArray(array2D_3).then(totalSum => {
    console.log(totalSum);
});