
//single parameters can omit the parens, single lines can
//omit the curly brackets
const print = msg => console.log(`Message: ${msg}`);
const printHello = () => console.log("Hello");
const printRandom = () => console.log(Math.random());
const add = (a, b) => a + b;

function addSomething(a, b) {
    
}

//call our functions
print("My name is Ted");
printHello();
const result = add(10, 20);
console.log(`The result is ${result}`);

//higher order functions

doSomethingAlot(printHello, 10);
doSomethingAlot(printRandom, 3);

function doSomethingAlot(func, num) {
    for (let i = 1; i <= num; i++) {
        func();
    }
}