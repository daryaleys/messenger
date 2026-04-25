// [1, 2, 3, 4] => 1

export function first<T>(list: T[]): T | undefined;
export function first(list: unknown): undefined;
export function first<T>(list: T[] | unknown): T | undefined {
    if (Array.isArray(list) && list.length) {
        return list[0];
    }

    return undefined;
}
