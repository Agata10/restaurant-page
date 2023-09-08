function createLeftSide() {

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('contact-img-div');
    imgDiv.style.backgroundImage = 'url(images/macback.jpg)';

    return imgDiv;
}

function createRightSide() {

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right-div-contact');

    const header = document.createElement('h1');
    header.textContent = "SEE YOU SOON"

    const firstDiv = document.createElement('div');
    const smallHeader1 = document.createElement('h2');
    smallHeader1.textContent = 'PHONE NUMBER';
    const phone = document.createElement('p');
    phone.textContent = '123 - 456 - 7890';
    firstDiv.appendChild(smallHeader1);
    firstDiv.appendChild(phone);

    const secDiv = document.createElement('div');
    const smallHeader2 = document.createElement('h2');
    smallHeader2.textContent = 'EMAIL';
    const email = document.createElement('p');
    email.textContent = 'restaurant@org.com';
    secDiv.appendChild(smallHeader2);
    secDiv.appendChild(email);

    const thirdDiv = document.createElement('div');
    const smallHeader3 = document.createElement('h2');
    smallHeader3.textContent = 'ADDRESS';
    const address = document.createElement('p');
    address.textContent = '123 Noname St, New York 80300';
    thirdDiv.appendChild(smallHeader3);
    thirdDiv.appendChild(address);

    rightDiv.appendChild(header);
    rightDiv.appendChild(firstDiv);
    rightDiv.appendChild(secDiv);
    rightDiv.appendChild(thirdDiv);

    return rightDiv;
}

function setBtnActive() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.classList.add('active');
    menuBtn.classList.remove('active');
    homeBtn.classList.remove('active');
}

function createGridDiv() {

    const gridDiv = document.createElement('div');
    gridDiv.classList.add('contact-grid-div');

    gridDiv.appendChild(createLeftSide());
    gridDiv.appendChild(createRightSide());
    
    return gridDiv;
}

function createContactpage() {
    const homeDiv = document.querySelector('main');
    document.body.style.background = 'black';

    while(homeDiv.hasChildNodes()) {
        homeDiv.removeChild(homeDiv.firstChild)
        }

    homeDiv.appendChild(createGridDiv());
 

    setBtnActive();
}

export default createContactpage;