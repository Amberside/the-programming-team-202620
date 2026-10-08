const hiddenButtonShow = document.querySelectorAll('#hideUntilClick');
const hiddenTextShow = document.querySelectorAll('#result2');

function displayText(whatFollows) {
    if (whatFollows == 'moreInfo') {
        document.getElementById("result").textContent = "You want to know who I am?\r\n";
        document.getElementById("result").textContent += "Sure!\r\n";
        document.getElementById("result").textContent += "My name is Charlotte! As of writing this I am studying at University... Oh yeah, and I currently exist in four dimensions... I think...\r\n";
        hiddenButtonShow.forEach(element => {
            element.classList.remove('hiddenButton');
        });
        hiddenTextShow.forEach(element => {
            element.classList.remove('hidden');
        });
    } else if (whatFollows == 'leave') {
        document.getElementById("result").textContent = "Well that is quite simple my friend, just close this tab in your web browser. :)";
        hiddenButtonShow.forEach(element => {
            element.classList.add('hiddenButton');
        });
        hiddenTextShow.forEach(element => {
            element.classList.add('hidden');
        });
    } else if (whatFollows == 'evenMoreInfo') {
        document.getElementById("result2").textContent = "I like games, web design and programming. :D\r\n";
        document.getElementById("result2").textContent += "Though most of my Replit projects have not only broken over time, but also have been deleted. D:\r\n";
        document.getElementById("result2").textContent += "I also don't own enough Steam games as of now. ;3";
    } else {
        document.getElementById("result").textContent = "NONONO";
    }
}