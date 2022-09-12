//automatic---

setInterval(slideshow,3000);
function slideshow(){
if(document.getElementsByClassName("sliderimage")[0].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[1].classList.add("active");
    document.getElementsByClassName("sliderimage")[0].classList.remove("active");
}

else if(document.getElementsByClassName("sliderimage")[1].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[2].classList.add("active");
    document.getElementsByClassName("sliderimage")[1].classList.remove("active");
}

else if(document.getElementsByClassName("sliderimage")[2].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[3].classList.add("active");
    document.getElementsByClassName("sliderimage")[2].classList.remove("active");
}
else if(document.getElementsByClassName("sliderimage")[3].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[0].classList.add("active");
    document.getElementsByClassName("sliderimage")[3].classList.remove("active");
}
}
//automatic---


//with Button---
document.querySelector("#slideButton").addEventListener("click",slideshow);

function slideshow(){
if(document.getElementsByClassName("sliderimage")[0].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[1].classList.add("active");
    document.getElementsByClassName("sliderimage")[0].classList.remove("active");
}

else if(document.getElementsByClassName("sliderimage")[1].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[2].classList.add("active");
    document.getElementsByClassName("sliderimage")[1].classList.remove("active");
}

else if(document.getElementsByClassName("sliderimage")[2].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[3].classList.add("active");
    document.getElementsByClassName("sliderimage")[2].classList.remove("active");
}
else if(document.getElementsByClassName("sliderimage")[3].classList.contains("active"))
{
    
    document.getElementsByClassName("sliderimage")[0].classList.add("active");
    document.getElementsByClassName("sliderimage")[3].classList.remove("active");
}
}
//with button