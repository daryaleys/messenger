/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/

export function isEmpty(value: unknown): boolean {
    // null и undefined
    if (value == null) return true;

    // Примитивы: boolean, number, bigint, symbol
    if (typeof value === "boolean" || typeof value === "number" || typeof value === "bigint" || typeof value === "symbol") {
        return true;
    }

    // Строка: пустая строка считается пустой
    if (typeof value === "string") {
        return value.length === 0;
    }

    // Массив
    if (Array.isArray(value)) {
        return value.length === 0;
    }

    // Map и Set
    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    // Любой другой объект (включая {}, объекты с null-прототипом и т.д.)
    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }

    return false;
}
