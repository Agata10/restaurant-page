@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600&display=swap');

:root {
    --font-header-btns: "Hammersmith One";
    --font-logo: "Solway";
    --font-paragraph: "Hanken Grotesk";
    --color-btn: rgb(63, 69, 78, 0.6);
    --color-header: rgb(161, 157, 152, 0.12);
    --color-border: #CBCBC8;
    --color-menu-header: rgb(161, 157, 152, 0.15);
    --color-menu-item: rgb(63, 69, 78, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-size: cover;
    background-position: center;   
}

#content {
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    color: white; 
}

/* HEADER */

header {
    background: var(--color-header);
    height: 100px;
    border-bottom: 0.5px solid var(--color-border);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.header-btn {
    background-color: var(--color-btn);
    border: none;
    color: white;
    font-family: var(--font-paragraph);
    font-size: 1.2rem;
    font-weight: 500;
    width: 150px;
    height: 50px;
    cursor: pointer;
}

.header-btn:hover {
    transform: scale(1.1);
    border-bottom: 0.5px solid var(--color-border);
}

.active {
    border-bottom: 0.5px solid var(--color-border);
}

/* HOME PAGE */ 

main {
    height: calc(100vh - 140px); 
 }

 .home-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 40px;
 }

.logo {
    display: flex;
    font-family: var(--font-logo);
}  

.logo h3 {
    font-size: 2rem;
}

.logo img {
    position: relative;
    top: -45px;
    left: 30px;
    transform: rotate(5deg);
    width: 80px;
    height: 80px;
}

main h1 {
    font-family: var(--font-header-btns);
    letter-spacing: 15px;
    font-size: 5rem;
    line-height: 0;
    text-align: center;
}

main p {
    font-family: var(--font-paragraph);
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
    padding-top: 15px;
}

/* FOOTER */

footer {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-header);
    margin-top: auto;
    margin-bottom: 0;
    font-family: var(--font-paragraph);
    font-size: 0.9rem;
    font-weight: 200;
    padding: 10px;
    height: 40px;
}

/* MENU PAGE */ 

 .scroll-menu-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: scroll;
    max-height: 100%;
    width: 100%;

    padding-top: 30px;
    padding-bottom: 30px;
 }

 .menu-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 150px;
    background-color: var(--color-menu-header);
 }

 .logo-menu img {
    width: 70px;
    height: 70px;
    position: relative;
    left: -40px;
    top: 40px;
    transform: rotate(5deg);
 }

 .logo-menu {
    font-size: 1.5rem;
    font-family: var(--font-logo);
    position: unset;
 }

 .menuText {
    font-size: 3rem;
    font-family: var(--font-header-btns);
    padding-bottom: 40px;
 }

 .main-dishes-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 50px;
    row-gap: 30px;
}

.desserts-div,
.coffee-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    column-gap: 50px;
    row-gap: 30px;
}

.menu-text {
    background-color: var(--color-menu-item);
    font-size: 1.8rem;
    padding: 20px;
}

 .menu-item {
    height: 350px;
    width: 270px;
    background-color: var(--color-menu-item);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr, 1fr, 2fr;
 }

 .menu-item img {
    width: 230px;
    height: 150px;
    margin: 20px auto;
 }

 .menu-item p {
    text-align: left;
    margin: 20px;
    margin-top: 0px;
 }

 .name-item {
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
 }

 /* CONTACT PAGE */

.contact-grid-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.contact-img-div {
    width: 90%;
    height: 100%;
    background-size: cover;
    background-position: center;   
}

.right-div-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    gap: 30px;
}

.right-div-contact div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
 }

.right-div-contact h1 {
    font-size: 3rem;
    font-family: var(--font-header-btns) ;
    letter-spacing: 5px;
    padding-bottom: 50px;
}

.right-div-contact h2 {
    font-size: 1.5rem;
    font-family: var(--font-header-btns);
    font-weight: 300;
    
}

.right-div-contact p {
    font-family: var(--font-paragraph);
    align-content: flex-start;
}

@media (max-width: 700px) { 
    .main-dishes-div {
        grid-template-columns: 1fr;
    }

    .desserts-div {
        grid-template-columns: 1fr;
    }

    .coffee-div {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 500px) { 
    html {
        font-size: 60%;
    }

    main h1 {
        letter-spacing: 1px;
    }

    .header-btn {
        font-size: 1.5rem !important;
    }

    .right-div-contact h1 {
        letter-spacing: 0px;
    }

    .main-dishes-div {
        grid-template-columns: 1fr;
    }

    .desserts-div {
        grid-template-columns: 1fr;
    }

    .coffee-div {
        grid-template-columns: 1fr;
    }

   .name-item {
        margin: 0 20px;
   }

   .menu-item img {
        margin-bottom: 0px;
   }

   .menu-item {
    height: 300px;
   }
    
}