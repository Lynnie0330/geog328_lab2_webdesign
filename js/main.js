// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Select all elements with the class "accordion"
var acc = document.getElementsByClassName("accordion");

// Loop through each accordion button
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Toggle the "active" class on the clicked button
    this.classList.toggle("active");

    // Get the next element (the panel div)
    var panel = this.nextElementSibling;

    // Toggle the display of the panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
