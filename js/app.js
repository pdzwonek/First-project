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

//drop-down-list --left-side
var listArrow = document.querySelectorAll(".list_arrow");
console.log(listArrow);

for(var i=0; i<listArrow.length; i++){

    listArrow[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("list_panel");
    });
}

//finding elements in DOM

var firstPanel = document.getElementById("first_panel").children;
var secondPanel = document.getElementById("second_panel").children;
var thirdPanel = document.getElementById("third_panel").children;

var panelLeftTitle = document.querySelector(".panel_left .title");
var panelLeftColor = document.querySelector(".panel_left .color");
var panelLeftPattern = document.querySelector(".panel_left .pattern");
var panelLeftTransport = document.querySelector(".panel_left .transport");

var transport = document.querySelector("#transport");

var textTransport = document.querySelector(".checkbox p");

//Adding elements to right panel

for (var i=0; i<firstPanel.length; i++){
    firstPanel[i].addEventListener("click", function(){
        panelLeftTitle.innerHTML = this.innerHTML;
    })
}

for (var i=0; i<secondPanel.length; i++){
    secondPanel[i].addEventListener("click", function(){
        panelLeftColor.innerHTML = this.innerHTML;
    })
}

for (var i=0; i<thirdPanel.length; i++){
    thirdPanel[i].addEventListener("click", function(){
        panelLeftPattern.innerHTML = this.innerHTML;
    })
}

transport.addEventListener("click", function(){
    if (transport.checked == true){
        panelLeftTransport.innerHTML = textTransport.innerHTML;
    } else {
        panelLeftTransport.innerHTML = "";
    }
})


})
