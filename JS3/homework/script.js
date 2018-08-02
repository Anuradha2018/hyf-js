
let arr = [];
let newNumbers =[];
 for (let i =0; i< 10; i++){
     arr.push(prompt("Enter a number" + (i+1)));
 }
 console.log('Full array:'+ arr.join(',') );

 const oddNumbers = arr.filter(odd => odd % 2 != 0);
 console.log(oddNumbers);

for(let j =0;j< oddNumbers.length; j++){
    newNumbers[j] = oddNumbers[j] * 2;
}
console.log("The doubled numbers are", newNumbers);