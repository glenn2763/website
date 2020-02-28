'use strict'

var data = 'default'
if (localStorage.getItem('mode')) {
    data = localStorage.getItem('mode');
}
localStorage.clear();
localStorage.setItem('mode', data);

function setModeAcrossPage() {
    data = localStorage.getItem('mode');
    setActiveStyleSheet(data);
    var button = document.getElementById("myButton");
    if (data == 'dark-mode') {
        button.innerHTML = 'Light Mode';
    }
}

window.onload = setModeAcrossPage;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavResponsive() {
    var topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
        topnav.classList.add("responsive");
    } else {
        topnav.classList.remove("responsive");
    }
}

function topNavColor() {
    var x = document.getElementById("myTopnav");
    if (window.pageYOffset > x.height()) {
        x.className += " scrolled";
    }
    else {
    }
};

function toggleMode() {
    var button = document.getElementById("myButton");
    if (getActiveStyleSheet() == 'default') {
        setActiveStyleSheet('dark-mode');
        button.innerHTML = 'Light Mode';
        localStorage.clear();
        localStorage.setItem('mode', 'dark-mode');
    }
    else {
        setActiveStyleSheet('default');
        button.innerHTML = 'Dark Mode';
        localStorage.clear();
        localStorage.setItem('mode', 'default');
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


