audio.muted = false;
let doNotRepeat = false;
let secretUnlocked = false;
let audioNew = new Audio("sound/Secret.opus");

function handleELE(buttonElement) {
    alert("... Very well... ELE (Extinction Level Event) begun...");
    const imageElement = document.getElementById("replacable");
    imageElement.src = "images/blob.png";
    const imageElementTree = document.getElementById("replacableFace");
    imageElementTree.src = "images/faceStrange.png";
    document.body.style.backgroundColor = "var(--base-color)";
    audioNew.pause();
    let container = buttonElement.closest('.image-container');
    container.classList.remove('active');
    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Charrrrr";
}

function avertELE() {
    alert("ELE averted. Refreshing control panel.");
    location.reload();
}

function toggleSecret(container) {
    if (doNotRepeat == true) {

    } else {
        doNotRepeat = true;
        audio.muted = true;
        audioNew.volume = 0.05;
        audioNew.play();
        audioNew.loop = true;
    }
    
    if (secretUnlocked == false) {
        container.classList.toggle('active');
        alert("Are you sure you wish to destroy 'livingEntities[all]'? (Prompt will appear after clicking OK.)");
        secretUnlocked = true;
    } else {

    }
}