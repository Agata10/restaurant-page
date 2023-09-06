
const createLogo = () => {

    const headerDiv = document.createElement('div');
    headerDiv.classList.add("menu-header");

    const logoDiv = document.createElement('section');
    logoDiv.classList.add("logo");

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

const createMainDishes = () => {
    const mainDishesDiv = document.createElement('div');
    mainDishesDiv.classList.add('main-dishes-div');


    const frenchToast = createItem('./images/french-toast.jpg',
     'FRENCH TOAST',
     '12$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');
    
     const pancake = createItem('./images/panckes.jpg',
     'CREPES',
     '14$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const crossiant = createItem('./images/crossant-ham-cheese.jpg',
     'CROSSANT',
     '10$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const baquette = createItem('./images/baquette.jpg',
     'BAQUETTE',
     '13$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const salad = createItem('./images/salad.jpg',
     'SALAD',
     '14$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const ratatoule = createItem('./images/ratatoulie.jpg',
     'ratatoule',
     '16$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const steak = createItem('./images/steak.jpg',
     'STEAK',
     '22$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');

     const goulash = createItem('./images/goulash.jpg',
     'GOULASH',
     '18$',
     'French toast with blueberry filling and white chocolate' +
     'on top with whipping cream and strawberries.');


    mainDishesDiv.appendChild(frenchToast);
    mainDishesDiv.appendChild(pancake);
    mainDishesDiv.appendChild(crossiant);
    mainDishesDiv.appendChild(baquette);
    mainDishesDiv.appendChild(salad);
    mainDishesDiv.appendChild(ratatoule);
    mainDishesDiv.appendChild(steak);
    mainDishesDiv.appendChild(goulash);

    return mainDishesDiv;
}

function createItem(image, name, price, description) {
    const divItem = document.createElement('div');
    divItem.classList.add('menu-item');

   const imgItem = document.createElement('img');
   imgItem.setAttribute('src', `${image}`);

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


function createMenuPage() {
    const homeDiv = document.querySelector('main');
    homeDiv.classList.add('menuMain');
    document.body.style.background = 'black';

    const scrollMenuDiv = document.createElement('div');
    scrollMenuDiv.classList.add('scroll-menu-div');

    const mainDishesText = document.createElement('div');
    mainDishesText.textContent = 'MAIN DISHES';
    mainDishesText.classList.add('main-dishes-text');

    while(homeDiv.hasChildNodes()) {
        homeDiv.removeChild(homeDiv.firstChild)
    }
        
    scrollMenuDiv.appendChild(createLogo()); 
    scrollMenuDiv.appendChild(mainDishesText);
    scrollMenuDiv.appendChild(createMainDishes());
    homeDiv.appendChild(scrollMenuDiv);
};

export default createMenuPage;