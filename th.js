var myObject = {
    fname: "Qader",
    lname: "Khan",
    age: 45,
    userid: "iy23@isit.com",
    myfunc : function(){
        return "<b>First Name:</b> " + this.fname + "<br/>" + "<b>Last Name:</b> "+ this.lname + "<br/>" + "<b>Age:</b> " + this.age + " <br/>" +"<b><i>ID Number:</i></b> " + this.userid;
    }
};

document.getElementById("mi2").innerHTML = myObject.myfunc();