/*document.getElementById("clickbtn").addEventListener("click", show)


function show()
{
    document.write("Hello Mithu");
}*/

document.getElementById("clickbtn1").addEventListener("click", showall)


function showall()
{
    document.getElementById("box1").setAttribute("class","showNow");
}

document.querySelector("#clickbtn2").addEventListener("click", hideall)


function hideall()
{
    document.querySelector("#box1").setAttribute("class","hideNow");
}