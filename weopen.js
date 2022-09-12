
//new page----
document.querySelector("#windowopen1").addEventListener("click",printPage1)

    function printPage1(){
    window.open("https://www.youtube.com","PRINT WINDOW","height=500px,width=500px,left=350px,top=80px");
}
//new page


//new null page----
document.querySelector("#windowopen2").addEventListener("click",printPage2)

    function printPage2(){
    var newWindow = window.open(null ,"PRINT WINDOW","height=500px,width=500px,left=350px,top=80px");

    newWindow.document.write("<h1 style = 'text-align:center;line-height:500px' >Your Id has been Hacked</h1>");
}

//new null page