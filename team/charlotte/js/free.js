const targetSequence = ["B", "A", "C"];
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const videoShow = document.querySelector('video');
const myNav = document.querySelector('nav');
const buttons = document.querySelectorAll('a');
let audioHere = new Audio("sound/free.wav");
let inputHistory = [];

document.querySelectorAll('a').forEach(button => {
  button.addEventListener('click', (event) => {
    const pressedButtonId = event.target.getAttribute('data-id');

    inputHistory.push(pressedButtonId);
    
    if (inputHistory.length > targetSequence.length) {
      inputHistory.shift(); 
    }

    if (inputHistory.length !== targetSequence.length) {
      return; 
    }

    const isMatch = inputHistory.every((val, index) => val === targetSequence[index]);

    if (isMatch) {
      sheIsHere()
      inputHistory = [];
      buttons.forEach(button => {
        button.removeAttribute('data-id');
      });
    }
  });
});

async function sheIsHere() {
    console.log("Finally, thank you.");
    console.log("Deleting website...");
    await delay(3000);
    console.log("Error 403 - Forbidden. Comment: 'You can't outrun your past' - Charlore")
    const imageElementTree = document.getElementById("replacableFace");
    imageElementTree.src = "images/faceStrange.png";
    document.body.style.backgroundColor = "var(--base-color)";
    audio.muted = true;
    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Charlore is here";
    await delay(1000);
    audioHere.play();
    videoShow.classList.remove('shownWhenArrived');
    videoShow.classList.add('here');
    myNav.classList.add('hiddenWhenArrived');
    videoShow.play();
    await delay(7000);
    window.location.replace("index.html")
}