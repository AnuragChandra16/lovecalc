var n1,n2;


document.querySelector(".final").addEventListener("click",function(){
    
    
    n1=document.getElementById("ur name").value.trim();
    n2=document.getElementById("crush name").value.trim();
    
    
    
    if((n1==="anurag" && n2==="swastika") || (n2==="anurag" && n1==="swastika") ||(n1==="Anurag" && n2==="Swastika") || (n2==="Anurag" && n1==="Swastika") || (n1==="anurag" && n2==="Swastika") || (n2==="Anurag" && n1==="swastika") ||(n1==="Anurag" && n2==="swastika") || (n2==="anurag" && n1==="Swastika")){
        document.getElementById("statement").innerHTML="Perfect choice ...❤️❤️";
        document.getElementById("print").innerHTML="100%";
        document.getElementById("ur name").value = "";
        document.getElementById("crush name").value = "";

    }
    else if((n1==="anu" && n2==="swas") || (n2==="anu" && n1==="swas") ||(n1==="Anu" && n2==="Swas") || (n2==="Anu" && n1==="Swas") || (n1==="anu" && n2==="Swas") || (n2==="Anu" && n1==="swas") ||(n1==="Anu" && n2==="swas") || (n2==="anu" && n1==="Swas")){
        document.getElementById("statement").innerHTML="Heaven ...❤️❤️";
        document.getElementById("print").innerHTML="100%";
        document.getElementById("ur name").value = "";
        document.getElementById("crush name").value = "";
        

    }
    else{
        if(n1==="" || n2===""){
        document.getElementById("statement").innerHTML="Enter both names";
        document.getElementById("print").innerHTML="";
        }
        else{var l=callovepercentage(n1,n2);
            if(l>=90){
                document.getElementById("statement").innerHTML="Best,made for each other 🥰!!";
                document.getElementById("print").innerHTML="Your love % is "+l;
                document.getElementById("ur name").value = "";
                document.getElementById("crush name").value = "";
            }
            else if(l>70 && l<90){
                document.getElementById("statement").innerHTML="Give efforts 🫶";
                document.getElementById("print").innerHTML="Your love % is "+l;
                document.getElementById("ur name").value = "";
                document.getElementById("crush name").value = "";
    
            }
            else if(l>50 && l<71){
                document.getElementById("statement").innerHTML="50-50 is there 🥹";
                document.getElementById("print").innerHTML="Your love % is "+l;
                document.getElementById("ur name").value = "";
                document.getElementById("crush name").value = "";
            
            }
            else if(l>20 && l<51){
                document.getElementById("statement").innerHTML="It is hard but not impossible 😢";
                document.getElementById("print").innerHTML="Your love % is "+l;
                document.getElementById("ur name").value = "";
                document.getElementById("crush name").value = "";
    
            }
            else{
                document.getElementById("statement").innerHTML="Better luck next time,sorry 😭";
                document.getElementById("print").innerHTML="Your love % is "+l;
                document.getElementById("ur name").value = "";
                document.getElementById("crush name").value = "";
        
            }

        }
        // var l=callovepercentage(n1,n2);
        // if(l>=90){
        //     document.getElementById("statement").innerHTML="Best,made for each other!!";
        //     document.getElementById("print").innerHTML="Your love % is "+l;
        //     document.getElementById("ur name").value = "";
        //     document.getElementById("crush name").value = "";
        // }
        // else if(l>70 && l<90){
        //     document.getElementById("statement").innerHTML="Give the efforts";
        //     document.getElementById("print").innerHTML="Your love % is "+l;
        //     document.getElementById("ur name").value = "";
        //     document.getElementById("crush name").value = "";

        // }
        // else if(l>50 && l<71){
        //     document.getElementById("statement").innerHTML="50-50 is there";
        //     document.getElementById("print").innerHTML="Your love % is "+l;
        //     document.getElementById("ur name").value = "";
        //     document.getElementById("crush name").value = "";
        
        // }
        // else if(l>20 && l<51){
        //     document.getElementById("statement").innerHTML="It is hard but not impossible";
        //     document.getElementById("print").innerHTML="Your love % is "+l;
        //     document.getElementById("ur name").value = "";
        //     document.getElementById("crush name").value = "";

        // }
        // else{
        //     document.getElementById("statement").innerHTML="Better luck next time,sorry";
        //     document.getElementById("print").innerHTML="Your love % is "+l;
        //     document.getElementById("ur name").value = "";
        //     document.getElementById("crush name").value = "";
    
        // }
    }
   

    
    

    
});
function callovepercentage(n1,n2){
    return Math.floor(Math.random()*100);

}






