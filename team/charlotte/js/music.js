let audiomode = sessionStorage.getItem('audiomode');
let audio = new Audio("sound/Theme.mp3");
const audioToggle = document.getElementById('audioToggle');
const navigationEntries = performance.getEntriesByType('navigation');
const [navEntry] = navigationEntries;

const enableAudioMode = () => {
    audio.muted = false;
    audio.loop = true;
    audio.play()
    document.body.classList.add('audiomode');
    sessionStorage.setItem('audiomode', 'active');
    audiomode = 'active';
};

const disableAudioMode = () => {
    audio.muted = true;
    document.body.classList.remove('audiomode');
    sessionStorage.setItem('audiomode', 'inactive');
    audiomode = 'inactive';
};

audioToggle.addEventListener('click', () => {
    if (sessionStorage.getItem('audiomode') === 'active') {
        disableAudioMode();
    } else {
        enableAudioMode();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTime = sessionStorage.getItem('audioTime');

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
    if (audiomode === null) {
        disableAudioMode();
    } else if (audiomode === 'active') {
        enableAudioMode();
    } else {
        disableAudioMode();
    }
});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('audioTime', audio.currentTime);
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        audio.pause();
    } else if (document.visibilityState === 'visible') {
        if (sessionStorage.getItem('audiomode') === 'active') {
            audio.play()
        }
    }
});

if (navigationEntries.length > 0) {
    const navigationType = navigationEntries[0].type;

    if (navigationType === 'reload') {
        if (sessionStorage.getItem('audiomode') === 'active') {
            disableAudioMode();
        }
    } else if (navEntry && navEntry.type === 'navigate') {
        const hasSameDomainReferrer =
            document.referrer &&
            new URL(document.referrer).origin === window.location.origin;

        if (!hasSameDomainReferrer) {
            disableAudioMode();
        } else {
            if (sessionStorage.getItem('audiomode') === 'active') {
                enableAudioMode();
            } else {
                disableAudioMode();
            }
        }
    }
}