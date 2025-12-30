let image=document.querySelector("#box");
let like=document.querySelector("i");
image.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(1)";
     setTimeout(function(){
    like.style.animation="shake 0.5s infinite";
    like.style.opacity=1;
    },1000);
    setTimeout(function(){
    like.style.transform="translate(-50%,-50%) scale(0)";
    like.style.opacity=0;
    like.style.animation="none";
    },3000);
});
