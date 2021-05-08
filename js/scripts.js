console.log("loading js file");
//console.log("test");
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Hide top bar */
var prevScrollpos = window.pageYOffset;
var myElement = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    myElement.style.position = "relative";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    myElement.style.position = "fixed";
  }
  prevScrollpos = currentScrollPos;
};
