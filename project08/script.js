let users=[
    {dp:"https://i.pinimg.com/736x/f8/43/98/f843984e2a3867e9d88a6329604c3e90.jpg",story:"https://i.pinimg.com/736x/ab/be/96/abbe960885acf316c07a19ed8046688f.jpg"},
    {dp:"https://i.pinimg.com/1200x/ea/c6/7c/eac67c8d366bc8768758f3ab98792c7a.jpg",story:"https://i.pinimg.com/736x/46/d9/ea/46d9ea7f007034ff5b1299dfdb13626a.jpg"},
    {dp:"https://i.pinimg.com/736x/6b/c5/65/6bc5653e7f7a9cd3b8c5ac150e7e5724.jpg",story:"https://i.pinimg.com/736x/37/ba/6d/37ba6d054ef0d6196a88708e4ae7fa3a.jpg"},
    {dp:"https://i.pinimg.com/736x/04/b4/d8/04b4d8a03b25b4983bb647887611267b.jpg",story:"https://i.pinimg.com/736x/eb/77/70/eb7770dff1f8f08e4ed600b5ece7915a.jpg"},
    {dp:"https://i.pinimg.com/1200x/3d/18/b1/3d18b10b755f323e9210c754cad710d7.jpg",story:"https://i.pinimg.com/736x/d0/16/85/d01685605ccac3d9f59591c90ed7ebc1.jpg"},
    {dp:"https://i.pinimg.com/736x/21/b2/e7/21b2e7e2ab3d1eddc45a656839387905.jpg",story:"https://i.pinimg.com/736x/2a/24/7d/2a247d47099b02475b14527d0fd5cca0.jpg"},
    {dp:"https://i.pinimg.com/736x/d5/0d/13/d50d134685b6c57844fb0bd42d9e4180.jpg",story:"https://i.pinimg.com/1200x/97/54/18/9754186b5526cb0ab7667df5dff9636a.jpg"}
];
let stories=document.querySelector("#stories");
let clutter="";
users.forEach(function(elem,id){
    clutter+=` <div class="story">
              <img id="${id}" src="${elem.dp}" alt="">
            </div>`
});
stories.innerHTML=clutter;
stories.addEventListener("click",function(dets){
            document.querySelector("#full-screen").style.display="block";
            document.querySelector("#full-screen").style.backgroundImage=`url(${users[dets.target.id].story})`;
          
            document.querySelector("#full-screen").addEventListener("click",function(){
             document.querySelector("#full-screen").style.display="none";
           })
            setTimeout(function(){
                 document.querySelector("#full-screen").style.display="none";
            },3000);
});
