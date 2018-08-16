function multiply(m,n){
    return m*n;
}
const a = 5;
const b = 10;
const c = multiply(a,b);
console.log(c);


function setName(person, name){
    person.name =name;
}

const person1 = {age:26};

console.log(person1);

setName(person1,"Anu");

console.log(person1);




/*1. In Javascript , primitive datatypes are called by values and objects are passed by reference
  2.callsstack: Squence of function call in the above example is => main()->squareMe -> multiply
    
  3.error when the function keeps on getting executed that is infinite loop: Maximum call stack size exceeded
  4.SetTimeOut and SetInterval  as well as making AJAX call are web api. They're not part of the language.
  5. javascript takes help ofthe browser to solve the async issue.
  6.slow application: call stack is busy; 
  sayHello() > setTimeout which is a web api; It will run a timer. After a given time >it will call another function console.log() ; here anonymous function is the call back function*/
