var x = 0 ;

while(x < 5){
    document.getElementById("count1").innerHTML= x;
    document.write("The Numbers are: " + x + "<br/>");
    x++;
}

//array + while 
document.write("<br/>");
var myArray = ["Mithu","Nishat","Tasnim","Shuvon","Shammy","Noor","Tashfiya","Maliha","Sadia"];
var arrayLen = myArray.length;

var y = 0;

while(y < arrayLen){

    document.write(myArray[y] + "<br/>" + "<br/>");
    y++;
}
document.getElementById("arrnum").innerHTML= arrayLen;

//for loop

for(var z=0;z<20;z++)
{
    document.write("For Loops Numbers Are: " + z +" <br/>");
}