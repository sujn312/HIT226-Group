var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementById("close3");
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

var modal4 = document.getElementById('myModal4');
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementById("close4");
btn4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

var modal5 = document.getElementById('myModal5');
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementById("close5");
btn5.onclick = function() {
  modal5.style.display = "block";
}
span5.onclick = function() {
  modal5.style.display = "none";
}

var modal6 = document.getElementById('myModal6');
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementById("close6");
btn6.onclick = function() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById('myModal7');
var btn7 = document.getElementById("myBtn7");
var span7 = document.getElementById("close7");
btn7.onclick = function() {
  modal7.style.display = "block";
}
span7.onclick = function() {
  modal7.style.display = "none";
}

var modal8 = document.getElementById('myModal8');
var btn8 = document.getElementById("myBtn8");
var span8 = document.getElementById("close8");
btn8.onclick = function() {
  modal8.style.display = "block";
}
span8.onclick = function() {
  modal8.style.display = "none";
}

var modal9 = document.getElementById('myModal9');
var btn9 = document.getElementById("myBtn9");
var span9 = document.getElementById("close9");
btn9.onclick = function() {
  modal9.style.display = "block";
}
span9.onclick = function() {
  modal9.style.display = "none";
}

var modal19 = document.getElementById('myModal19');
var btn19 = document.getElementById("myBtn19");
var span19 = document.getElementById("close19");
btn19.onclick = function() {
  modal19.style.display = "block";
}
span19.onclick = function() {
  modal19.style.display = "none";
}

var modal11 = document.getElementById('myModal11');
var btn11 = document.getElementById("myBtn11");
var span11 = document.getElementById("close11");
btn11.onclick = function() {
  modal11.style.display = "block";
}
span11.onclick = function() {
  modal11.style.display = "none";

}

var modal20 = document.getElementById('myModal20');
var btn20 = document.getElementById("myBtn20");
var span20 = document.getElementById("close20");
btn20.onclick = function() {
  modal20.style.display = "block";
}
span20.onclick = function() {
  modal20.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5
    || event.target == modal6 || event.target == modal7 || event.target == modal8 || event.target == modal9 || event.target == modal10
    || event.target == modal11 || event.target == modal19 || event.target == modal20) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}

// back to top button//
const backToTopButton = document.querySelector("#goTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 600) {
    backToTopButton.style.display = "block";
  }
  else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
