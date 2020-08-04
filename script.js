var btn=document.querySelector(".switch-btn");
var  video=document.querySelector(".video-container");

btn.addEventListener("click",function(e){
    if(!e.currentTarget.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
   
    // if(!btn.classList.contains("slide ")){
    //     btn.classList.add("slide");
    //     video.pause();
    // }else{
    //     btn.classList.remove("slide ");
    //     video.play();
    // }
})