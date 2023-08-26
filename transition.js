let namefield=document.getElementById("namefields");
let titlename=document.getElementById("titlename");
let btnsignup=document.getElementById("signupbtn");
let btnsignin=document.getElementById("signinbtn");
 
btnsignin.onclick=function(){
    namefield.style.maxHeight="0";
    titlename.innerHTML="Sign In";
    btnsignin.classList.remove("disabled");
    btnsignup.classList.add("disabled");
}

btnsignup.onclick=function(){
    namefield.style.maxHeight="60px";
    titlename.innerHTML="Sign Up";
    btnsignin.classList.add("disabled");
    btnsignup.classList.remove("disabled");
}


            
            
            
        
            

            
            
            
            
        