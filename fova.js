document.querySelector("#formInput").addEventListener("submit", submitForm);

function submitForm(){
    var Uvalue = document.querySelector("#UPassword").value;

    var ULimit = Uvalue.length;

    if(ULimit < 8 ){
        document.querySelector("#passerrormsg").innerHTML="Your Password should be equal or than 8 character";
    }
    else {
        document.querySelector("#showPassword").innerHTML=Uvalue;
    }
}
