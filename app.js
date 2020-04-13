'use strict'

var data = 'default'
if (sessionStorage.getItem('mode')) {
    data = sessionStorage.getItem('mode');
}
sessionStorage.setItem('mode', data);
setActiveStyleSheet(data);


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavResponsive() {
    var topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
        topnav.classList.add("responsive");
    } else {
        topnav.classList.remove("responsive");
    }
}

function toggleMode() {
    var button = document.getElementById("myButton");
    if (getActiveStyleSheet() == 'default') {
        setActiveStyleSheet('dark-mode');
        button.innerHTML = 'Light Mode';
        sessionStorage.setItem('mode', 'dark-mode');
    }
    else {
        setActiveStyleSheet('default');
        button.innerHTML = 'Dark Mode';
        sessionStorage.setItem('mode', 'default');
    }
}

function setActiveStyleSheet(title) {
    var i, a, main;
    for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
        }
        if (a.getAttribute("title") == title) {
            a.disabled = false;
        }
    }
}
    
function getActiveStyleSheet() {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
    }
    return null;
}

function checkButton() {
    var button = document.getElementById("myButton");
    if (data == 'dark-mode') {
        button.innerHTML = 'Light Mode';
    }
}

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});

function change2() {
    $('.frisbeePictures2 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures2');
    console.log('changed 2');
}
setTimeout(change2, 2001);

function change3() {
    $('.frisbeePictures3 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures3');
    console.log('changed 3');
}
setTimeout(change3, 4001);

function change4() {
    $('.frisbeePictures4 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures4');
    console.log('changed 4');
}
setTimeout(change4, 6001);

function cycle1() {
    $('.frisbeePictures1 img:gt(0)').hide();
    setInterval(function(){
      $('.frisbeePictures1 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures1');}, 8000);
};
$(function(){
    $('.frisbeePictures1 img:gt(0)').hide();
});
setTimeout(cycle1, 0);

function cycle2() {
    $('.frisbeePictures2 img:gt(0)').hide();
    setInterval(function(){
      $('.frisbeePictures2 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures2');}, 8000);
};
$(function(){
    $('.frisbeePictures2 img:gt(0)').hide();
});
setTimeout(cycle2, 2000);

function cycle3() {
    $('.frisbeePictures3 img:gt(0)').hide();
    setInterval(function(){
      $('.frisbeePictures3 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures3');}, 8000);
};
$(function(){
    $('.frisbeePictures3 img:gt(0)').hide();
});
setTimeout(cycle3, 4000);

function cycle4() {
    $('.frisbeePictures4 img:gt(0)').hide();
    setInterval(function(){
      $('.frisbeePictures4 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.frisbeePictures4');}, 8000);
};
$(function(){
    $('.frisbeePictures4 img:gt(0)').hide();
});
setTimeout(cycle4, 6000);

