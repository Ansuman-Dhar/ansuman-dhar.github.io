function writeConsole(txt) {
    txt = txt || "";
    typewriter_console.changeCursor("|")
    typingSound.paused ? typingSound.play() : typingSound.pause();
    typewriter_console.pauseFor(100).typeString(txt).start();
    typewriter_console.pauseFor(0).typeString('<br>> ').start();
    typewriter_console.changeCursor("auto_pilot");
}

function initConsole(){
    typewriter_console.deleteAll(1);
    typewriter_console.typeString('> ').start();
    console_DOM.style.display = "block";
    console_DOM.style.opacity = "1";
}

function clrConsole(){
    typewriter_console.deleteAll(1).start();
    console_DOM.style.display = "none";
    console_DOM.style.opacity = "0";
}

function writeCenter(txt) {
    txt = txt || "";
    typewriter_center.deleteAll();
    centerText.style.display = 'flex';
    typewriter_center.typeString(txt).start();
}

function initCenter(){
    typewriter_center.deleteAll(1).start();
    centerText.style.display = "block";
    centerText.style.opacity = "1";
}

function clrCenter(){
    typewriter_center.deleteAll(1).start();
    centerText.style.display = "none";
    centerText.style.opacity = "0";
}

function I_am(txt){
    alert(`Its ${txt}`);
}

function skip(){
    document.querySelector('#skipBtn').style.display = 'none';
    clrCenter();
    consoleHome();
}