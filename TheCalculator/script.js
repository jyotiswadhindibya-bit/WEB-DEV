const display=document.getElementById("display-bar");
let input="";
const keypad=document.querySelector(".input-btn");
keypad.addEventListener("click",function(store){
    const clickedbtn=store.target;
    if(clickedbtn.id.startsWith("pt"))
        return;
    const btnValue=clickedbtn.innerText;
    if(btnValue==="AC")
        input="";
    else if(btnValue==="del")
        input=input.slice(0,-1);
    else if(btnValue==="+")
        input+="+";
    else if(btnValue==="-")
        input+="-";
    else if(btnValue==="x")
        input+="*";
    else if(btnValue==="/")
        input+="/";
    else if(btnValue==="mod")
        input+="%";
    else if(btnValue==="%")
        input+="/100";
    else if(btnValue==="=")
        input=eval(input).toString();
    else
        input+=btnValue;
    result();
});
    function result(){
        display.innerText=input;
}


