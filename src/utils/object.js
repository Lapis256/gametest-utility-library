export function mergeObject(...objects) {
    const result = {};
    for(const obj of objects)
    for(const key in obj) {
        result[key] = obj[key];
    }
    return result;
}
