let bossCurrentHealth = 100;
const bossMaxHealth = 100;
let yourCurrentHealth = 100;
const yourMaxHealth = 100;
const bossHealthBar = document.getElementById("bossHealthBar");
const bossHealthText = document.getElementById("bossHealthText");
const yourHealthBar = document.getElementById("yourHealthBar");
const yourHealthText = document.getElementById("yourHealthText");
const buttonFireball = document.getElementById("fireball");
const buttonHeal = document.getElementById("heal");
const allInfo = document.getElementById("bossFightInfo");
const history = [];
let consecutiveOver = 0;
let consecutiveUnder = 0;
let firstAttack = true;

function fireball(amount) {
    bossCurrentHealth -= amount;
    if (bossCurrentHealth < 0) {
        bossCurrentHealth = 0;
    }
    updateBossHealthUI();
    if (bossCurrentHealth == 0) {
        endFight();
    } else {
        bossTurn();
    }
}

function heal(amount) {
    yourCurrentHealth += amount;
    if (yourCurrentHealth > yourMaxHealth) {
        yourCurrentHealth = yourMaxHealth;
    }
    updateYourHealthUI();
    bossTurn();
}

function bossFireball(amount) {
    yourCurrentHealth -= amount;
    if (yourCurrentHealth < 0) {
        yourCurrentHealth = 0;
    }
    updateYourHealthUI();
    if (yourCurrentHealth == 0) {
        youLose();
    } else {
        yourTurn();
    }
}

function bossHeal(amount) {
    bossCurrentHealth += amount;
    if (bossCurrentHealth > bossMaxHealth) {
        bossCurrentHealth = bossMaxHealth;
    }
    updateBossHealthUI();
    yourTurn();
}

function updateBossHealthUI() {
    const bossHealthPercentage = (bossCurrentHealth / bossMaxHealth) * 100;
    
    bossHealthBar.style.width = `${bossHealthPercentage}%`;
    
    bossHealthText.textContent = `${bossCurrentHealth} / ${bossMaxHealth} HP`;

    if (bossHealthPercentage > 50) {
        bossHealthBar.style.background = "#e74c3c";
    } else if (bossHealthPercentage > 20) {
        bossHealthBar.style.background = "#f1c40f";
    } else {
        bossHealthBar.style.background = "#2ecc71";
    }
}

function updateYourHealthUI() {
    const yourHealthPercentage = (yourCurrentHealth / yourMaxHealth) * 100;
    
    yourHealthBar.style.width = `${yourHealthPercentage}%`;
    
    yourHealthText.textContent = `${yourCurrentHealth} / ${yourMaxHealth} HP`;

    if (yourHealthPercentage > 50) {
        yourHealthBar.style.background = "#2ecc71";
    } else if (yourHealthPercentage > 20) {
        yourHealthBar.style.background = "#f1c40f";
    } else {
        yourHealthBar.style.background = "#e74c3c";
    }
}

async function bossTurn() {
    buttonFireball.disabled = true;
    buttonHeal.disabled = true;
    await delay(2000);
    if (firstAttack == true) {
        bossFireball(25);
        firstAttack = false;
    } else {
        mathEnsureNoRepeat(); 
    }
}

async function yourTurn() {
    await delay(1000);
    buttonFireball.disabled = false;
    buttonHeal.disabled = false;
}

async function endFight() {
    buttonFireball.disabled = true;
    buttonHeal.disabled = true;
    await delay(1000);
    allInfo.classList.add('hidden');
    await delay(2000);
    bossMusic.muted = true;
    alert("Damn... well this sucks... :( ")
    alert("Well done for defeating me, I'll let you go on with your business then... I'll be here... healing...")
    alert("Come back if you ever want to duel again, this was fun! :D")
    window.location.replace("index.html")
}

async function youLose() {
    buttonFireball.disabled = true;
    buttonHeal.disabled = true;
    await delay(1000);
    allInfo.classList.add('hidden');
    await delay(2000);
    bossMusic.muted = true;
    alert("Looks like you lost...")
    alert("Well, normally I'd make sure you'd leave and never come back...")
    alert("But, I'll be honest, that fight was fun... Come back if you ever want to duel again. :)")
    window.location.replace("index.html")
}

function mathEnsureNoRepeat() {
    const num = Math.random();
    
    if (num > 0.5) {
        consecutiveOver++;
        consecutiveUnder = 0;
        if (consecutiveOver < 3) {
            bossFireball(15);
        }
    } else if (num < 0.5) {
        consecutiveUnder++;
        consecutiveOver = 0;
        if (consecutiveUnder < 3) {
            bossHeal(10);
        }
    } else {
        consecutiveOver = 0;
        consecutiveUnder = 0;
        bossFireball(15);
        bossHeal(10);
    }

    if (consecutiveOver === 3) {
        bossHeal(10);
        consecutiveOver = 0;
    } else if (consecutiveUnder === 3) {
        bossFireball(15);
        consecutiveUnder = 0;
    }
}