function validateage(){
    var name=document.getElementById("name");
    var age=document.getElementById("age").value;
    var result=document.querySelector("p");
   
    if(age>=18)
    {
 result.innerHTML="You r aligible";
    
    }else
    {
        alert("You r not eligible😂");
    }

}