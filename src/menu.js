
function createLogo() {

    const headerDiv = document.createElement('div');
    headerDiv.classList.add("menu-header");

    const logoDiv = document.createElement('section');
    logoDiv.classList.add("logo-menu");

    const img = document.createElement('img');
    img.setAttribute('src', 'images/logo.png');

    const logoText = document.createElement('h3');
    logoText.textContent = 'OH LA LA CAFÉ';

    logoDiv.appendChild(img);
    logoDiv.appendChild(logoText);

    const menuText = document.createElement('div');
    menuText.textContent = 'MENU';
    menuText.classList.add('menuText');

    headerDiv.appendChild(logoDiv);
    headerDiv.appendChild(menuText);

    return headerDiv;
}

function createMainDishes() {
    const startTime = performance.now();
    const mainDishesDiv = document.createElement('div');
    mainDishesDiv.classList.add('main-dishes-div');

    mainDishesDiv.appendChild(
        createItem(
            'FRENCH TOAST',
            '12$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'CREPES',
            '14$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'CROISSANT',
            '10$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'BAQUETTE',
            '13$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'SALAD',
            '14$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'RATATOUILLE',
            '16$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'STEAK',
            '22$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    mainDishesDiv.appendChild(
        createItem(
            'GOULASH',
            '18$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));


    const duration = performance.now() - startTime;
    console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);


    return mainDishesDiv;
}

function createDesserts() {
    const dessertsDiv = document.createElement('div');
    dessertsDiv.classList.add('desserts-div');

    dessertsDiv.appendChild(
        createItem(
            'CRÈME',
            '12$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    dessertsDiv.appendChild(
        createItem(
            'MACARONS',
            '13$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    return dessertsDiv;
}

function createCoffees() {
    const coffeeDiv = document.createElement('div');
    coffeeDiv.classList.add('coffee-div');

    coffeeDiv.appendChild(
        createItem(
            'LATTE',
            '7$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    coffeeDiv.appendChild(
        createItem(
            'REGULAR',
            '5$',
            'White chocolate and blueberry filling, whipping cream on top with strawberries.'));

    return coffeeDiv;
}

function createItem(name, price, description) {
    const divItem = document.createElement('div');
    divItem.classList.add('menu-item');

    const imgItem = document.createElement('img');
    imgItem.src = `images/menu/${name.toLowerCase()}.jpg`;
    imgItem.alt = `${name}`;

    const headText = document.createElement('div');
    headText.classList.add('name-item');

    const nameItem = document.createElement('h3');
    nameItem.textContent = name;

    const priceItem = document.createElement('h3');
    priceItem.textContent = price;

    headText.appendChild(nameItem);
    headText.appendChild(priceItem);

    const descrItem = document.createElement('p');
    descrItem.textContent = description;

    divItem.appendChild(imgItem);
    divItem.appendChild(headText);
    divItem.appendChild(descrItem);

    return divItem;
}

function setBtnActive() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');
    menuBtn.classList.add('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}

function createHeder(name) {
    const divHeader = document.createElement('div');
    divHeader.textContent = name;
    divHeader.classList.add('menu-text');

    return divHeader;
}

function createScrollDiv() {

    const scrollMenuDiv = document.createElement('div');
    scrollMenuDiv.classList.add('scroll-menu-div');

    while (scrollMenuDiv.hasChildNodes()) {
        scrollMenuDiv.removeChild(scrollMenuDiv.firstChild)
    }

    scrollMenuDiv.appendChild(createLogo());
    scrollMenuDiv.appendChild(createHeder('MAIN DISHES'));
    scrollMenuDiv.appendChild(createMainDishes());
    scrollMenuDiv.appendChild(createHeder('DESSERTS'));
    scrollMenuDiv.appendChild(createDesserts());
    scrollMenuDiv.appendChild(createHeder('CAFÉS'));
    scrollMenuDiv.appendChild(createCoffees());

    return scrollMenuDiv;
}


function createMenuPage() {
    const homeDiv = document.querySelector('main');
    document.body.style.background = 'black';

    while (homeDiv.hasChildNodes()) {
        homeDiv.removeChild(homeDiv.firstChild)
    }

    homeDiv.appendChild(createScrollDiv());

    setBtnActive();

};

export default createMenuPage;