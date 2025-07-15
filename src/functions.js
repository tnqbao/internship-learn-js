function CalculateSum(a, b) {
    return a + b;
}

console.log(CalculateSum(3,5))

function Multiplication(a, b, c, d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
        throw new Error('All parameters must be numbers');
    }
    return a * b * c * d;
}

console.log(Multiplication(2, 3, 4, 5));