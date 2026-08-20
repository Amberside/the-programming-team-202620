// Select the button and the hidden message
const button = document.querySelector("#aboutButton");
const message = document.querySelector("#aboutMessage");

// Add a click event to the button
button.addEventListener("click", function () {

  if (message.style.display === "none") {
    message.style.display = "block";
    button.textContent = "Hide About Me";
  } else {
    message.style.display = "none";
    button.textContent = "Show More About Me";
  }

});