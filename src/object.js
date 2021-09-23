export function mergeObject(base, ...objects) {
    for(const obj of objects)
    for(const key in obj) {
        base[key] = obj[key];
        const descriptor = Object.getOwnPropertyDescriptor(obj.constructor, key);
        Object.defineProperty(base, key, {...descriptor, value: obj[key]});
    }
}
