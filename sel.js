var x = document.querySelector("#selectdesign").value;
var y  =document.querySelector("#selectdesign2").value;
//with span
document.querySelector("#selectdesign").addEventListener("change", function(){

document.querySelector("#selectNumber h1 span").innerHTML=this.value;
});
//with span

//without span
document.querySelector("#selectdesign2").addEventListener("change", function(){

    
    document.querySelector("#selectNumber2 h1").innerHTML="You Have Selected: "+ this.value;
    });
//without span

//with Statement
    document.querySelector("#selectdesign3").addEventListener("change", function(){

        var myValue = this.value;
        if(myValue=="Dhaka"){
            document.querySelector("#selectNumber3 h1").innerHTML="City Of Mosque is Dhaka";
        }

        else if(myValue=="Berlin"){
            document.querySelector("#selectNumber3 h1").innerHTML="City of Bear is Berlin";        }

       else if(myValue=="Ottowa"){
            document.querySelector("#selectNumber3 h1").innerHTML="City of Snowfall is Ottowa"; 
        }

        else if(myValue=="Melbourn"){
            document.querySelector("#selectNumber3 h1").innerHTML="City of Cricket is Melbourne"; 
        }

        else {
            
        }
        });
//with Statement

//double select
document.querySelector("#selectdesign4").addEventListener("change", function(){

    var district = this.value;
    if(district=="Dhaka"){
        document.querySelector("#selectNumber4").innerHTML='<select id=" "><option value=" ">Select City</option><option value="Mirpur">Mirpur</option><option value="Mohakhali">Mohakhali</option><option value="Uttora">Uttora</option><option value="Gulshan">Gulshan</option></select>';
    }
    else if(district=="Berlin"){
        document.querySelector("#selectNumber4").innerHTML='<select id=" "><option value=" ">Select City</option><option value="Baumstrase">Baumstrase</option><option value="Mohakhali">Mohakhali</option><option value="Uttora">Uttora</option><option value="Gulshan">Gulshan</option></select>';
    }
    else if(district=="Ottowa"){
        document.querySelector("#selectNumber4").innerHTML='<select id=" "><option value=" ">Select City</option><option value="Mirpur">Mirpur</option><option value="Mohakhali">Mohakhali</option><option value="Uttora">Uttora</option><option value="Gulshan">Gulshan</option></select>';
    }

    else if(district=="Melbourn"){
        document.querySelector("#selectNumber4").innerHTML='<select id=" "><option value=" ">Select City</option><option value="Mirpur">Mirpur</option><option value="Mohakhali">Mohakhali</option><option value="Uttora">Uttora</option><option value="Gulshan">Gulshan</option></select>';
    }
  


    else {
    
    }
    });



//double select
    