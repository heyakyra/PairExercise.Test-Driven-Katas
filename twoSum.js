const twoSum = (numbers, target) => {
    let result = [];
    for (let index1 = 0; index1 < numbers.length - 1; index1++) {
        // console.log("\n", number1);
        for (let index2 = index1 + 1; index2 < numbers.length; index2++) {
            if (numbers[index1] + numbers[index2] === target) {
                result = [index1, index2];
            }
        }
    }
    return result;
}

module.exports = twoSum;