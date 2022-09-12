//change 360
document.getElementById("clickbtn1").addEventListener("dblclick",function(){

document.getElementById("box1").setAttribute("style","display:block;opacity:1;transform:rotate(360deg);background:grey");

})
//change 360

//change -360
document.getElementById("clickbtn2").addEventListener("dblclick", function() {

document.getElementById("box1").setAttribute("style","display:block;opacity:1;transform:rotate(-180deg);background:green");
    
})
//change -360

//change color
document.getElementById("clickbtn3").addEventListener("click",colorchange)
function colorchange(){

    document.getElementById("box1").setAttribute("style","display:block;opacity:1;background:black");
    
    }
//change color

//mobile bar
    document.getElementById("show").addEventListener("click",showbar)
        function showbar(){
    
        document.getElementById("box2").setAttribute("style","display:block;opacity:1;transform:scaleY(1)");
        
        }
        document.getElementById("hide").addEventListener("click",hidebar)
        function hidebar(){
        
            document.getElementById("box2").setAttribute("style","display:block;opacity:1;transform:scaleY(0)");
            
            }
            document.getElementById("sidebarshow").addEventListener("click",sidemenushow)
            function sidemenushow(){
            
                document.getElementById("box2").setAttribute("style","display:block;opacity:1;transform:scaleX(1)");
                
                }
                document.getElementById("sidebarhide").addEventListener("click",sidemenuhide)
            function sidemenuhide(){
            
                document.getElementById("box2").setAttribute("style","display:block;opacity:1;transform:scaleX(0)");
                
                }

//mobile bar