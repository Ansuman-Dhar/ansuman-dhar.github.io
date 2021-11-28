var centerText = document.querySelector('#center');
var console_DOM = document.querySelector('#console');
var takeATourBtn = document.querySelector('#initBtn');
var cl_IP = `{YOUR_IP}`;
var typewriter_console = new Typewriter(console_DOM, { delay: 75, cursor: "auto_pilot" });
var typewriter_center = new Typewriter(centerText, { delay: 50 });
var typingSound = new Audio('./audio/char.mp3');
typingSound.preload;
typingSound.volume = 1

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
function getIP(){
    let promise = new Promise((resolve, reject) => {
        fetch('https://api64.ipify.org/?format=json')
        .then((response) => response.json())
        .then((data) => { cl_IP = data.ip; resolve() })
        .catch(() => { reject("Unable to obtain data from https://api64.ipify.org/?format=json") });
    });
    return promise;
}