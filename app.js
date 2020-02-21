'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

console.log('Here\'s a hidden message')

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavResponsive() {
    var x = document.getElementById("myTopnav");
    var bars = document.getElementById("bars");
    if (x.className === "topnav") {
        x.classList.add("responsive");
    } else {
        x.classList.remove("responsive");
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