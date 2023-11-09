import {ArrayUtils} from "./index.js";

export function isBlank(obj) {
    if (obj === null || obj === undefined || obj === "") {
        return true
    }
    if (Array.isArray(obj) && !obj.length) {
        return true
    }
    if (typeof obj === "object" && !Object.keys(obj).length) {
        return true
    }
    if (typeof obj === "number" && isNaN(obj)) {
        return true
    }
    return false
}

export function removeBlankProperties(obj) {
    if (Array.isArray(obj)) {
        if (obj.length) {
            return ArrayUtils.removeBlankValue(obj)
        } else {
            return obj
        }
    } else if (typeof obj !== "object") {
        return obj
    } else {
        for (const key in obj) {
            if (isBlank(obj[key])) {
                delete obj[key]
            } else {
                removeBlankProperties(obj[key])
                if (isBlank(obj[key])) {
                    delete obj[key]
                }
            }
        }
        return obj
    }
}
