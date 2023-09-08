import createWebsite from "./homepage.js";
import createHomepage from "./home.js";
import createMenuPage from "./menu.js";
import createContactpage from "./contact.js";

function create() {
    createWebsite();
    createHomepage();
    handleClick();
};

function handleClick() {
let menuClick = false;
let homeClick = true;
let contactClick = false;

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', () => {
    if(homeClick === false) {
        createHomepage();
        homeClick = true;
        menuClick = false;
        contactClick = false;
    } else return;
    
});

menuBtn.addEventListener('click', () => {
    if(menuClick === false) {
        createMenuPage();
        menuClick = true;
        homeClick = false;
        contactClick = false;
    } else return;
});

contactBtn.addEventListener('click', () => {
    if(contactClick === false) {
        createContactpage();
        contactClick = true;
        homeClick = false;
        menuClick = false;
    } else return;
});
}

create();

