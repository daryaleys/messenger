/*
range(4); // => [0, 1, 2, 3]
range(-4); // => [0, -1, -2, -3]
range(1, 5); // => [1, 2, 3, 4]
range(0, 20, 5); // => [0, 5, 10, 15]
range(0, -4, -1); // => [0, -1, -2, -3]
range(1, 4, 0); // => [1, 1, 1]
range(0); // => []
*/

/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/

export function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

export function range(start, end, step, isRight) {
    let a = start;
    let b = end;
    let k = step;

    if (arguments.length === 0) {
        return [];
    }

    if (!end) {
        b = start;
        a = 0;
        k = b >= 0 ? 1 : -1;
    } else if (!step) {
        k = b >= 0 ? 1 : -1;
    }

    const result = [];

    if (k === 0) {
        const length = Math.abs(a - b);
        for (let i = 0; i < length; i++) {
            result.push(a);
        }
        return result;
    }

    if (k > 0) {
        for (let i = a; i < b; i += k) {
            result.push(i);
        }
    } else {
        for (let i = a; i > b; i += k) {
            result.push(i);
        }
    }

    if (isRight) {
        result.reverse();
    }

    return result;
}
