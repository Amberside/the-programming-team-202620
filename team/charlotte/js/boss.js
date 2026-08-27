const targetSequence = ["B", "A", "C"];
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const videoShow = document.querySelector('video');
const imgShow = document.querySelector('img');
const myNav = document.querySelector('nav');
let audioHere = new Audio("sound/enterBoss.wav");
let bossMusic = new Audio("sound/bossMusic.mp3");
let inputHistory = [];

const button = document.getElementById('initiateFight');

button.addEventListener('click', function() {
    bossTime(); 
}, {
    once: true 
});

async function bossTime() {
    console.log("This is our last chance!");
    console.log("Deleting website...");
    await delay(3000);
    console.log("Error 403 - Forbidden. Comment: 'Found you :)' - Charlore")
    const imageElementTree = document.getElementById("replacableFace");
    imageElementTree.src = "images/faceStrange.png";
    document.body.style.backgroundColor = "var(--base-color)";
    audio.muted = true;
    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Charlore can see you :)";
    await delay(1000);
    audioHere.play();
    videoShow.classList.remove('shownWhenArrived');
    videoShow.classList.add('here');
    myNav.classList.add('hiddenWhenArrived');
    videoShow.play();
    await delay(7000);
    videoShow.classList.add('shownWhenArrived');
    imgShow.classList.remove('shownWhenArrived');
    imgShow.classList.add('here');
    const cardBox = document.getElementById('intiateToHide');
    cardBox.classList.add('hidden');
    audioHere.muted = true;
    await delay(2000);
    alert("Goodbye.");
    bossMusic.play();
    bossMusic.loop = true;
    const healthBar = document.getElementById("bossFightInfo");
    healthBar.classList.remove('hidden');
    healthBar.classList.add('showDuringFight');
}