
const createLogo = () => {

    const headerDiv = document.createElement('div');
    headerDiv.classList.add("menu-header");

    const logoDiv = document.createElement('div');
    logoDiv.classList.add("logo");
    logoDiv.classList.add("menuLogo");

    const img = document.createElement('img');
    img.setAttribute('src', 'images/logo.png');
    
    const logoText = document.createElement('h3');
    logoText.textContent = 'OH LA LA CAFÉ';

    logoDiv.appendChild(img);
    logoDiv.appendChild(logoText);

    const menuText = document.createElement('h1');
    menuText.textContent = 'MENU';

    headerDiv.appendChild(logoDiv);
    headerDiv.appendChild(menuText);

    return headerDiv;
}


function createMenuPage() {
    const homeDiv = document.querySelector('main');
    homeDiv.classList.add('menuMain');

   
    document.body.style.background = 'black';

       while(homeDiv.hasChildNodes()) {
        homeDiv.removeChild(homeDiv.firstChild)
        }
           
        homeDiv.appendChild(createLogo()); 

};

export default createMenuPage;