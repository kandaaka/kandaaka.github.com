(function(){

    "use strict";


    let currentImage = 0;
    const myPhotos = ["boba.jpg","bball.jpg","pizza.jpg","cali.jpg","mom.png"];
    const container = document.getElementById("content");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    function swapImage(){
        const newImg = document.createElement("img");
        newImg.src = `images/${myPhotos[currentImage]}`;
        newImg.setAttribute("class", "fadeinimg");
        container.appendChild(newImg);

        if (container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }

    nextBtn.addEventListener("click", function(event){
        event.preventDefault();
        currentImage++;
        if (currentImage == (myPhotos.length)){
            currentImage = 0;
        }
        
        swapImage();

    })

    prevBtn.addEventListener("click", function(event){
        event.preventDefault();
        currentImage--;
        if (currentImage < 0){
            currentImage = myPhotos.length-1;
        }
        swapImage();

    })

}())