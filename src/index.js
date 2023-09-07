import createHomepage from "./homepage.js";
import createHome from "./home.js";
import createMenuPage from "./menu.js";

function createWebsite() {
    createHomepage();
    createHome();
    handleClick();
};

function handleClick() {
let menuClick = false;
let homeClick = true;

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');

homeBtn.addEventListener('click', () => {
    if(homeClick === false) {
        createHome();
        homeClick = true;
        menuClick = false;
    } else return;
    
});
menuBtn.addEventListener('click', () => {
    if(menuClick === false) {
        createMenuPage();
        menuClick = true;
        homeClick = false;
    } else return;
});
 }

createWebsite();

