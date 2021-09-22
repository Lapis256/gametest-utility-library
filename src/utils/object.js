export function objectEntries(obj) {
    const result = [];
    for(const key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

export function objectKeys(obj) {
    return objectEntries(obj).map(([k, _]) => k);
}

export function objectValues(obj) {
    return objectEntries(obj).map(([_, v]) => v);
}
