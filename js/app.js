document.addEventListener("DOMContentLoaded", function(){

////////// menu //////////

var list = document.querySelector(".main-menu");
var listElement = list.firstElementChild;
var subMenu = listElement.querySelector("#menu");

listElement.addEventListener("mouseover", function(){
    var visible = subMenu.classList.add("visible-menu");
});

menu.addEventListener("mouseout", function(){
    var hide = subMenu.classList.remove("visible-menu");
});

////////// slayder //////////
var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");

var img = document.querySelectorAll(".images li");
console.log(img); //array

var indexImg = 0;
console.log(img[indexImg]);

img[indexImg].style.display = "block";

rightArrow.addEventListener("click", function(){
    img[indexImg].style.display = "none";

    if (indexImg === img.length - 1) {
        indexImg--; //stoped slayder
        //indexImg = -1; //loop with images
    }
    indexImg++;
    img[indexImg].style.display = "block";

});

leftArrow.addEventListener("click", function(){
    img[indexImg].style.display = "none";
    //indexImg--; //loop with images
    if (indexImg === 0) {
        indexImg++;
        //indexImg = img.length - 1; //loop with images
    }
    indexImg--;
    img[indexImg].style.display = "block";

});

////////// galery //////////

var firstPictureBox = document.querySelector("#first-picture");
var secondPictureBox = document.querySelector("#second-picture");

var firstOpacityBox = firstPictureBox.firstElementChild;
var secondOpacityBox = secondPictureBox.firstElementChild;

firstPictureBox.addEventListener("mouseover", function(){
    firstOpacityBox.style.display = "none";
});

firstPictureBox.addEventListener("mouseout", function(){
    firstOpacityBox.style.display = "block";
});

secondPictureBox.addEventListener("mouseover", function(){
    secondOpacityBox.style.display = "none";
});

secondPictureBox.addEventListener("mouseout", function(){
    secondOpacityBox.style.display = "block";
});

})
