takeATourBtn.addEventListener('click', async () => {
    getIP()
    .then(() => {
        startScript();
        document.querySelector('.skip').style.display = 'block';
    })
    .catch((err) => { console.error(err) });
    
});

function welcome(){
    document.getElementById('welcomePage').style.display = 'none';
    setTimeout(function(){ centerText.style.opacity = '1' }, 750);
    writeCenter(`Hello<br>${cl_IP}`);
}

async function startScript(){
    document.body.requestFullscreen();
    welcome();
    await sleep(5000);
    writeCenter("You may know me");
    await sleep(4500);
    writeCenter("I_am(\'Ansuman_Dhar\');");
    await sleep(5000);
    writeCenter("I like building stuffs");
    await sleep(5000);
    writeCenter("Especially with javascript");
    await sleep(5000);
    writeCenter("Just like this one");
    await sleep(5000);
    writeCenter("I love collabs");
    await sleep(5000);
    writeCenter("Show some ❤ at <a target='_blank' href='https://github.com/Ansuman-Dhar'>GitHub</a>");
    await sleep(7000);
    document.querySelector('#skipBtn').style.display = 'none';
    clrCenter();
    consoleHome();
}

async function consoleHome(){
    initConsole();
    writeConsole(`<span class="consoleObj" onclick="myProjects()">My Projects</span>`);
    writeConsole(`<span class="consoleObj" onclick="myLanguages()">Languages</span>`);
    writeConsole(`<span class="consoleObj" onclick="myLinks()">Web Links</span>`);
}

async function myProjects(){
    initConsole();
    writeConsole("SlamBook [WEB | Python | MySQL]");
    writeConsole("Chat App [WEB | Node.js]");
    writeConsole("Internet Radio App [WEB]");
    writeConsole("WhatsApp message scheduler [Python]");
    writeConsole("Zoom Auto Signin bot [Python]");
    writeConsole("Rock paper cissor [WEB]");
    writeConsole(`<span class="consoleObj" onclick="consoleHome()">../ Back</span>`);
}

async function myLanguages(){
    initConsole();
    writeConsole("HTML");
    writeConsole("Javascript");
    writeConsole("Python");
    writeConsole("Java");
    writeConsole("*CSS is not a language");
    writeConsole(`<span class="consoleObj" onclick="consoleHome()">../ Back</span>`);
}

async function myLinks(){
    initConsole();
    writeConsole(`<a class="consoleObj" href="https://github.com/Ansuman-Dhar/" target="_blank">GitHub</a>`);
    writeConsole(`<a class="consoleObj" href="https://www.youtube.com/channel/UC60dOD5CwjNSJ9qOpL_vI8g" target="_blank">YouTube</a>`);
    writeConsole(`<a class="consoleObj" href="https://twitter.com/iamansuthecoder" target="_blank">Twitter @iamansuthecoder</a>`);
    writeConsole(`<a class="consoleObj" href="mailto:ansuman.official100@gmail.com" target="_blank">E-Mail</a>`);
    writeConsole(`<a class="consoleObj" href="https://soundcloud.com/ansuman-dhar" target="_blank">SoundCloud</a>`);
    writeConsole(`<a class="consoleObj" href="https://www.reddit.com/user/Dangerous-Chapter-14" target="_blank">Reddit</a>`);
    writeConsole(`<a class="consoleObj" href="https://pinterest.com/ansumandhar/" target="_blank">Pinterest</a>`);
    writeConsole(`<span class="consoleObj" onclick="consoleHome()">../ Back</span>`);
}