let global = "This is global";
function globalFunction() {
    console.log(global);
}
globalFunction();

function functionScope() {
    let local = "This is local";
    console.log(local);
}
functionScope();
// console.log(local); // Error: local is not defined

// Block Scope
{
    let block = "This is block scoped";
    console.log(block);
}
// console.log(blockScoped); // Error: blockScoped is not defined

console.log(hoisted); // => undefined
let hoisted = "This is hoisted";
// console.log(hoisted); // Error: Cannot access 'hoistedLet' before init