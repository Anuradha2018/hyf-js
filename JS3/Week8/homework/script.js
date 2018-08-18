function createArray(upperLimit){
    var array = [];
    for (let i = 1; i <= upperLimit; i++) {
        array.push(i);
        
    }
   return array;
}

const array = createArray(1000);
console.log(array);

function divisionBy(divisor){
    const divisibleArray = array.filter(num => num % divisor == 0);
    console.log(divisibleArray);
    console.log(`The numbers divisible by ${divisor} are ${divisibleArray}`);
    return divisibleArray;
}

const divisibleByThree = divisionBy(3);
//divisibleByThree();

const divisibleByTen = divisionBy(10);
//divisibleByTen();

const divisibleByTwentyOne = divisionBy(21);
//divisibleByTwentyOne();

const newArr = createArray(30);
newArr.forEach((num)=>{
    divisionBy(num);
    console.log(newArr);
});


/*
let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
    const divisibleFactory = function(z){

    }

    // apply your function
    // const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;

    */