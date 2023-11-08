import {ObjectUtils} from "./index.js";

export function removeDuplicate(arr, filter) {
    if (!arr.length) {
        return arr
    }
    while (arr.length) {
        const duplicatedIndex = findFirstDuplicatedItem(arr, filter)
        if (duplicatedIndex === -1) {
            return arr
        } else {
            arr.splice(duplicatedIndex, 1)
        }
    }
    return arr
}

export function removeBlankValue(arr) {
    if (!arr.length) {
        return arr
    }
    while (arr.length) {
        const index = arr.findIndex(item => ObjectUtils.isBlank(item))
        if (index === -1) {
            return arr
        } else {
            arr.splice(index, 1)
        }
    }
    return arr
}

function findFirstDuplicatedItem(arr, filter) {
    const isFilterString = typeof filter === "string"
    const isFilterFn = typeof filter === "function"

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (isFilterString) {
                if (arr[i]?.[filter] === arr[j]?.[filter]) {
                    return i
                }
            } else if (isFilterFn) {
                if (filter(arr[i], arr[j])) {
                    return i
                }
            } else {
                if (arr[i] === arr[j]) {
                    return i
                }
            }
        }
    }
    return -1
}

