function mouseOn(e) {
    e.target.style.color = "red";
  }
  
  function mouseOff(e) {
    e.target.style.color = "black";
  }
  
  for (const id of ['nav1', 'nav2']) {
    let nav = document.getElementById(id);
  
    nav.addEventListener('mouseover', mouseOn);
    nav.addEventListener('mouseout', mouseOff);
  }

// let navOne = document.getElementById("nav1");

// function mouseOn(navButton) {
//     navButton.style.color = "red";
// }

// function mouseOff(navButton) {
//     navButton.style.color = "black";
// }

// navOne.addEventListener('mouseover', mouseOn(navOne));
// navOne.addEventListener('mouseout', mouseOff(navOne));

// let navOne = document.getElementById("nav1");

// function mouseOn() {
//     nav1.style.color = "red";
// }

// function mouseOff() {
//     nav1.style.color = "black";
// }

// navOne.addEventListener('mouseover', mouseOn);
// navOne.addEventListener('mouseout', mouseOff);


// function changeColor (obj) {
//     obj.style.color = "#FF5733";
// }

// function returnColor (obj) {
//     obj.style.color = "black";
// }

// navOne.onmouseenter = changeColor;
// navOne.onmouseleave = returnColor;

//let navTwo = document.getElementById("nav2");
//let navThree = document.getElementById("nav3");
//let navFour = document.getElementById("nav4");

//navTwo.onmouseenter = changeColor(navTwo);
//navTwo.onmouseleave = returnColor(navTwo);

// navThree.onmouseenter = changeColor;
// navThree.onmouseleave = returnColor;

// navFour.onmouseenter = changeColor;
// navFour.onmouseleave = returnColor;



// let mouseon = function(event) {
//     event.target.style.color = "#FF5733";
// }

// let mouseoff = function(event) {
//     event.target.style.color = "black";
// }

// let eventHandler = function() {
//     navOne.onmouseenter = mouseon;
//     navOne.onmouseleave = mouseoff;
// }

// let navOne = document.getElementById("nav1");

// navOne.eventHandler;