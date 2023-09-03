const createHeader = () => {

    const headerElem = document.createElement('header');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('header-btn');
    menuBtn.classList.add('header-btn');
    contactBtn.classList.add('header-btn');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    headerElem.appendChild(homeBtn);
    headerElem.appendChild(menuBtn);
    headerElem.appendChild(contactBtn);

    return headerElem;
}

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

const createMain = () => {
    const mainElem = document.createElement('main');

    mainElem.appendChild(createSection1());
    mainElem.appendChild(createSection2());
    mainElem.appendChild(createSection3());

    return mainElem;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright &copy Agata Deter 2023';

    return footer;
}

function createHomepage() {
    const divContent = document.getElementById('content');

    divContent.appendChild(createHeader());
    divContent.appendChild(createMain());
    divContent.appendChild(createFooter());
};

export default createHomepage;