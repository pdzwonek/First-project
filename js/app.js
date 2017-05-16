document.addEventListener("DOMContentLoaded", function(){

////////// menu //////////

var list = document.querySelector(".main-menu");
var listElement = list.firstElementChild;
var subMenu = listElement.querySelector("#menu");

listElement.addEventListener("mouseover", function(){
    var visible = subMenu.classList.add("visible-menu");
});

subMenu.addEventListener("mouseout", function(){
    var hide = subMenu.classList.remove("visible-menu");
});

////////// slider //////////

var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");

var img = document.querySelectorAll(".images li");

var indexImg = 0;

img[indexImg].style.display = "block";

rightArrow.addEventListener("click", function(){
    img[indexImg].style.display = "none";

    if (indexImg === img.length - 1) {
        indexImg = -1;
    }
    indexImg++;
    img[indexImg].style.display = "block";

});

leftArrow.addEventListener("click", function(){
    img[indexImg].style.display = "none";

    if (indexImg === 0) {
        indexImg = img.length;
    }
    indexImg--;
    img[indexImg].style.display = "block";

});

function autoSlide() {
    img[indexImg].style.display = "none";

    if (indexImg === img.length - 1) {
        indexImg = -1;
    }
    indexImg++;
    img[indexImg].style.display = "block";
}

setInterval(autoSlide, 4000);

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

////////// application //////////

var listArrow = document.querySelectorAll(".list_arrow");
console.log(listArrow);

for(var i=0; i<listArrow.length; i++){
    console.log([i]);

    listArrow[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("list_panel");
    });
}


})
