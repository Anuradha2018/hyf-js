/*function adderFactory(x) {
    return function(n){
        return n+x;
    };
}
const addFive = adderFactory(5);
console.log(addFive);
addFive(3);
console.log(addFive(3));*/

function createCounter(initialValue){
    let counter = initialValue;
    return{
        increase:()=>{
            counter++;
        },
        decrease:()=>{
            counter--;
        },
        get:()=>{
            return counter;
        }
    }
}

const counterTen = createCounter(10);
counterTen.get();
console.log(counterTen.get());