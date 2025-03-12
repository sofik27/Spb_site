function changeText(element, newText) {
    element.innerText = newText;
}

function resetText(element, originalText) {
    element.innerText = originalText;
}

function changeLogo(newSrc) {
    document.getElementById('footerLogo').src = newSrc;
    document.getElementById('headerLogo').src = newSrc;
}

function resetLogo() {
    document.getElementById('footerLogo').src = 'images/logo 2 without shadow.svg';
    document.getElementById('headerLogo').src = 'images/logo 2 without shadow.svg';
}

function changeArrow(newSrc) {
    document.getElementById('arrow').src = newSrc;
}

function resetArrow() {
    document.getElementById('arrow').src = 'images/Arrow back.svg';
}

function highlightLanguage(element) {
    const languages = document.querySelectorAll('.language');
    languages.forEach(lang => {
        lang.classList.remove('highlight');
        lang.style.color = '#7A91B5'; 
    });
    element.classList.add('highlight');
    element.style.color = 'white'; 
}

function resetLanguages() {
    const languages = document.querySelectorAll('.language');
    languages.forEach(lang => {
        lang.classList.remove('highlight');
        lang.style.color = '#7A91B5'; 
})
}
