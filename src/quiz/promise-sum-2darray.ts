const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(nums: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (nums.length === 0) {
            reject("Empty array is an invalid input...");
        }
        let sum = 0;
        nums.forEach((num) => {
            sum += num;
        });
        resolve(sum);
    });
}

function sum2dArray(arr: number[][]): Promise<number> {
    const promises = arr.map(row => sumRow(row));

    return Promise.all(promises).then((rowSums) => {
        let sum = 0;
        rowSums.forEach(row => {
            sum += row;
        })
        return sum;
    });
}

sum2dArray(array2D_1).then(totalSum => {
    console.log(totalSum);
});