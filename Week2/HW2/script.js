var n;
 for(n=1; n<=1000; n++){
   if(n%3==0 && n%5==0 && n%15==0){
     console.log(n);
     console.log("FizzBuzz");
   }
   else if(n%3==0){
     console.log(n);
     console.log("Fizz");
   }
   else if(n%5==0){
   console.log(n);
   console.log("Buzz");
   }
   else{
     //console.log("Invalid input");
   }
 }
