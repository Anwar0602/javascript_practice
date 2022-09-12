document.querySelector("#clickbtn1").addEventListener("click",showMe);

function showMe()
{
    document.querySelector("#apps1").classList.add("myStyle1");
}

document.querySelector("#clickbtn2").addEventListener("click",hideMe);

function hideMe()
{
    document.querySelector("#apps1").classList.add("myStyle2");
}


//getElement

document.getElementById("clickbtn3").addEventListener("click",whoru);

function whoru()
{
    document.getElementById("apps2").classList.add("myStyle3");
}

document.getElementById("#clickbtn4").addEventListener("click",imn);

function imn()
{
    document.getElementById("apps2").classList.add("myStyle4");
}



