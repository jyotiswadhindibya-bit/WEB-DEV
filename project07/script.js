let ele=document.querySelectorAll(".elem");
ele.forEach( function(val) {
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    }); 

    val.addEventListener("mousemove",function(pos){
        val.childNodes[3].style.left=pos.x+"px";
        val.childNodes[3].style.top=pos.y+"px";
    });

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    });
});
