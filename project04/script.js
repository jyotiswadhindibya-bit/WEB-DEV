let addFriend=document.querySelector("#Add");
let removeFriend=document.querySelector("#Remove")
let isStatus=document.querySelector("h5");

if (addFriend.textContent == "Add Friend") {
    removeFriend.style.display="none";
}
addFriend.addEventListener("click",function(){
    addFriend.textContent="Friends!";
    if (addFriend.textContent == "Friends!") {
        removeFriend.style.display="inline";
        isStatus.textContent="The Babysitter is now your friend also!";
        isStatus.style.color="green";
}
})
removeFriend.addEventListener("click",function(){
    addFriend.textContent="Add Friend";
    removeFriend.style.display="none";
    isStatus.textContent="The Babysitter";
    isStatus.style.color="red";
})
