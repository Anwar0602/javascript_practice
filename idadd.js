document.querySelector("#barmenu").addEventListener("click", showme);

function showme(){

    document.querySelector("div.mymenu").classList.toggle("showmenu");

}




/*
//show and hide with same bar---
function showme(){

if(document.querySelector("div.showmenu")){
    document.querySelector("div.mymenu").classList.remove("showmenu");
}
else{
    document.querySelector("div.mymenu").classList.add("showmenu");
}}
//show and hide with same bar
*/


//only show menu---
/*function showme(){

    document.querySelector("div.mymenu").classList.add("showmenu");

}*/
//only show menu

//with set attribute---
/*function showme()
{
    document.querySelector("#demo").setAttribute("class","showmenu");

}*/
//with set attribute