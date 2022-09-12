//comparison
var dataPassword = "123456";
var userInput = "123456";

var checkIT = (dataPassword == userInput) ? "Correct Password": "Incorrect Password";

document.getElementById("pass").innerHTML = checkIT;

//if else age
var UserAge = 18;
var YourAge = 18;

if(YourAge<UserAge){
    document.getElementById("agecondition").innerHTML="You Cannot Open account.";
}

else if(YourAge==UserAge){
    document.getElementById("agecondition").innerHTML="Congratulations You are 18 now.";
}

else{
    document.getElementById("agecondition").innerHTML="You Can Open account.";
}

//if else email password

var UserEmail = "anwar.mi1993@gmail.com";
var YourEmail = "anwar.mi1993@gmail.com";

var UserPass = "834750";
var YourPassword = "834750";

if(UserEmail == YourEmail || UserPass ==  YourPassword){
    document.getElementById("passCheck").innerHTML="All Information is Correct.";
}

else{
    document.getElementById("passCheck").innerHTML="Information is missing.";
}

