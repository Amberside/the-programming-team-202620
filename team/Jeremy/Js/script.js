/* script for click counter*/
let clickCount = 0;
const exploreBtn = document.getElementById('explore-btn');
const counterBadge = document.getElementById('counter');

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        clickCount++;
        counterBadge.textContent = clickCount;
    });
}