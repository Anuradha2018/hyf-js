var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";


var today = new Date().getDay();
console.log("Today is", weekday[today]);

var n = parseInt(prompt("Number of days to meet:"));
if(n==0){
  console.log("We will meet today");
}
else if (n>0 && n<=6){
   console.log("We will meet on :" + weekday[(today+n)%7]);

 }
else if(n>6){
  console.log("We will meet on:" + weekday[(today+n)%7]);
  
}
else{
  console.log("invalid");

}
