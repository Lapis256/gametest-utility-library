export function mergeObject(base, ...objects) {
    for(const obj of objects)
    for(const key in obj) {
        base[key] = obj[key];
    }
}
