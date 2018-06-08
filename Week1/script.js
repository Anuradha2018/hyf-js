var hYF06 = ['Syed Zeeshan', 'Anas', 'Anowar Uddin', 'Anuradha Mohanty', 'Constance mudondo', 'Marco de Cara', 'Ehsan','Haretha','Krishna Rana', 'Majd Darraj','Mohammad Azizul Huq','Mohammad Mosiur Rahman','Samara', 'Mohammad Azizul Huq','Vignesh','Zoey Zou'];
console.log(hYF06);
function randName(){
  var leng = hYF06.length;
  return Math.floor(Math.random()*leng)
}
var p1 = hYF06[randName()];
var p2 = hYF06[randName()];

if(p1 == p2){
  document.write("First member is : " + p1);
  document.write("<br>");
  document.write("Second member is: " + p2);
  document.write("<br>");
  document.write("Both names are same. So please try again ");
}
else{
  console.log("First member is :" + p1 +"," +"Second member is: " +p2);
  document.write("First member is : " + p1);
  document.write("<br>");
  document.write("Second member is: " + p2);
}
