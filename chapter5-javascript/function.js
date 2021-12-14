function add(a, b) {
    //these a, b cover the function
    let sum;
    sum = a + b;
    return sum;
}   

function showResults() {
    let a = 10;
    let b = 20;
    let result = add(a, b); 

    document.write(`${a} + ${b} = ${result}`);
}