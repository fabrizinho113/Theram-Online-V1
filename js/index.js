let github = document.getElementById('github');

function openInNewTab() {
    window.open('https://github.com/fabrizinho113/Theram-Online-V1', '_blank').focus();
}

github.addEventListener("click", openInNewTab);
