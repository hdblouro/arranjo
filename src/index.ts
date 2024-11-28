function generateArrangements(nums: number[], x: number): number[][] {
    const results: number[][] = [];

    function backtrack(path: number[], options: number[]) {
        if (path.length === x) {
            results.push([...path]);
            return;
        }

        for (let i = 0; i < options.length; i++) {
            path.push(options[i]);
            backtrack(path, options.filter((_, index) => index !== i));
            path.pop();
        }
    }

    backtrack([], nums);
    return results;
}

const arr = [1, 2, 3, 4];
const x = 2;
console.log(generateArrangements(arr, x));

