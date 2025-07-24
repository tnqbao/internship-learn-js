const a = 3
const b = 4
const c = 5

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilateral triangle')
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle')
    } else if (a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2) {
        console.log('Right triangle')
    } else {
        console.log('Scalene triangle')
    }
} else {
    console.log('Not a triangle')
}