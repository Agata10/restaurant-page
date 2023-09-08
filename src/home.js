const createSection1 = () => {
    const section1Elem = document.createElement('section');
    section1Elem.classList.add('logo');

    const img = document.createElement('img');
    img.setAttribute('src', './images/logo.png');
    img.classList.add('main');

    const logoText = document.createElement('h3');
    logoText.classList.add('main');
    logoText.textContent = 'OH LA LA CAFÉ';

    section1Elem.appendChild(img);
    section1Elem.appendChild(logoText);

    return section1Elem;
}

const createSection2 = () => {
    const section2Elem = document.createElement('section');
    const header = document.createElement('h1');
    header.classList.add('main');
    header.textContent = 'A TASTE OF PARIS'

    section2Elem.appendChild(header);

    return section2Elem; 
}

const createSection3 = () => {
    const section3Elem = document.createElement('section');
    const paragraph = document.createElement('p');
    paragraph.classList.add('main');
    paragraph.textContent = 'Welcome to the best taste of Paris in Colorado! Check our menu, see you soon !';

    section3Elem.appendChild(paragraph);

    return section3Elem; 
}

function setBtnActive() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}

function createHomeDiv() {

    const div = document.createElement('div');
    div.classList.add('home-div');

    div.appendChild(createSection1());
    div.appendChild(createSection2());
    div.appendChild(createSection3());

    return div;
}

function createHomepage() {
    const homeDiv = document.querySelector('main');

    document.body.style.removeProperty('background');
    document.body.style.backgroundImage = 'url(images/background.jpeg)';

    while(homeDiv.hasChildNodes()) {
        homeDiv.removeChild(homeDiv.firstChild)
        }

    homeDiv.appendChild(createHomeDiv());

    setBtnActive();
}

export default createHomepage;