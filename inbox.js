document.querySelector("#myInput").addEventListener("keyup", showInput);

function showInput(){
   var inputPwd = this.value;

   var myPwd = "Anwar1234";

    if(inputPwd == myPwd){
        document.querySelector("#demo h1").innerHTML = "<font color = 'blue'>Password Matched<font> ";
    }

        else {
        document.querySelector("#demo h1").innerHTML = "<font color = 'red'>Password not Matched<font>";
    }
}
