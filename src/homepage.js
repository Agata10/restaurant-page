function createHeader() {

    const headerElem = document.createElement('header');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('header-btn');
    menuBtn.classList.add('header-btn');
    contactBtn.classList.add('header-btn');

    homeBtn.setAttribute('id', 'homeBtn');
    menuBtn.setAttribute('id', 'menuBtn');
    contactBtn.setAttribute('id', 'contactBtn');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    headerElem.appendChild(homeBtn);
    headerElem.appendChild(menuBtn);
    headerElem.appendChild(contactBtn);

    return headerElem;
}

function createMain() {
    const main = document.createElement('main');
   
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © Agata Deter 2023';

    return footer;
}

function createWebsite() {
    const divContent = document.getElementById('content');

    divContent.appendChild(createHeader());
    divContent.appendChild(createMain());
    divContent.appendChild(createFooter());

};

export default createWebsite;