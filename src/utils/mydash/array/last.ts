// [1, 2, 3, 4] => 4

export function last<T>(list: T[]): T | undefined;
export function last(list: unknown): undefined;
export function last<T>(list: T[] | unknown): T | undefined {
    if (Array.isArray(list) && list.length) {
        return list[list.length - 1];
    }

    return undefined;
}
