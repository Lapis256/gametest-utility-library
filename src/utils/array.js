export function isSequence(array) {
    let [ previous, ...values ] = Array.from(array);
    for(const value of values) {
        if(Math.abs(value - previous) !== 1) {
            return false;
        }
        previous = value;
    }
    return true;
}
