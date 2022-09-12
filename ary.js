var x = [ "Anwarul ", "Islam ",  "Mithu " ];

x.push("Lemon Miya");

document.getElementById("name1").innerHTML=x;

document.getElementById("length1").innerHTML=x.length;

document.getElementById("sort1").innerHTML=x.sort();

document.getElementById("push1").innerHTML=x.join("  ");

//Date

var dateObject = new Date();

document.getElementById("dateshow").innerHTML=dateObject.getHours();


var hoursObject = new Date();

document.getElementById("hourshow").innerHTML=dateObject.getHours();


var minObject = new Date();

document.getElementById("minshow").innerHTML=dateObject.getMinutes();

//Current Time
var myVar = setInterval(myTimer1, 1000);

function myTimer1() {
  var d1 = new Date();
  var t1 = d1.toLocaleTimeString();
  document.getElementById("currenttime1").innerHTML = t1;
}

var myVar = setInterval(myTimer2, 1);

function myTimer2() {
  var d2 = new Date();
  var t2 = d2.getHours() + ":" + d2.getMinutes() + ":" + d2.getSeconds() + ":"  + d2.getMilliseconds() + " AM";
  document.getElementById("currenttime2").innerHTML = t2;
}


