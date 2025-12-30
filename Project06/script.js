let main=document.querySelector("#main");
let cursor=document.querySelector(".cursor");
main.addEventListener("mousemove",function(pos){
     cursor.style.left=pos.x+"px";
     cursor.style.top=pos.y+"px";
})