(()=>{"use strict";const e=()=>{const e=document.querySelector("main");for(e.classList.add("homeMain"),document.body.style.removeProperty("background"),document.body.style.backgroundImage="url(images/background.jpeg)";e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild((()=>{const e=document.createElement("section");e.classList.add("logo");const t=document.createElement("img");t.setAttribute("src","./images/logo.png"),t.classList.add("main");const n=document.createElement("h3");return n.classList.add("main"),n.textContent="OH LA LA CAFÉ",e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("section"),t=document.createElement("h1");return t.classList.add("main"),t.textContent="A TASTE OF PARIS",e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("section"),t=document.createElement("p");return t.classList.add("main"),t.textContent="Welcome to the best taste of Paris in Colorado! Check our menu, see you soon !",e.appendChild(t),e})())};function t(e,t,n,a){const d=document.createElement("div");d.classList.add("menu-item");const i=document.createElement("img");i.setAttribute("src",`${e}`);const o=document.createElement("div");o.classList.add("name-item");const c=document.createElement("h3");c.textContent=t;const s=document.createElement("h3");s.textContent=n,o.appendChild(c),o.appendChild(s);const r=document.createElement("p");return r.textContent=a,d.appendChild(i),d.appendChild(o),d.appendChild(r),d}(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button");return t.classList.add("header-btn"),n.classList.add("header-btn"),a.classList.add("header-btn"),t.setAttribute("id","homeBtn"),n.setAttribute("id","menuBtn"),a.setAttribute("id","contactBtn"),t.textContent="HOME",n.textContent="MENU",a.textContent="CONTACT",e.appendChild(t),e.appendChild(n),e.appendChild(a),e})()),e.appendChild((()=>{const e=document.createElement("main");return e.classList.add("mainHomep"),e})()),e.appendChild((()=>{const e=document.createElement("footer");return e.textContent="Copyright © Agata Deter 2023",e})())})(),e(),function(){let n=!1,a=!0;const d=document.getElementById("homeBtn"),i=document.getElementById("menuBtn");d.addEventListener("click",(()=>{!1===a&&(e(),a=!0,n=!1)})),i.addEventListener("click",(()=>{!1===n&&(function(){const e=document.querySelector("main");e.classList.add("menuMain"),document.body.style.background="black";const n=document.createElement("div");n.classList.add("scroll-menu-div");const a=document.createElement("div");for(a.textContent="MAIN DISHES",a.classList.add("main-dishes-text");e.hasChildNodes();)e.removeChild(e.firstChild);n.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu-header");const t=document.createElement("section");t.classList.add("logo");const n=document.createElement("img");n.setAttribute("src","images/logo.png");const a=document.createElement("h3");a.textContent="OH LA LA CAFÉ",t.appendChild(n),t.appendChild(a);const d=document.createElement("div");return d.textContent="MENU",d.classList.add("menuText"),e.appendChild(t),e.appendChild(d),e})()),n.appendChild(a),n.appendChild((()=>{const e=document.createElement("div");e.classList.add("main-dishes-div");const n=t("./images/french-toast.jpg","FRENCH TOAST","12$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),a=t("./images/panckes.jpg","CREPES","14$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),d=t("./images/crossant-ham-cheese.jpg","CROSSANT","10$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),i=t("./images/baquette.jpg","BAQUETTE","13$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),o=t("./images/salad.jpg","SALAD","14$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),c=t("./images/ratatoulie.jpg","ratatoule","16$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),s=t("./images/steak.jpg","STEAK","22$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries."),r=t("./images/goulash.jpg","GOULASH","18$","French toast with blueberry filling and white chocolateon top with whipping cream and strawberries.");return e.appendChild(n),e.appendChild(a),e.appendChild(d),e.appendChild(i),e.appendChild(o),e.appendChild(c),e.appendChild(s),e.appendChild(r),e})()),e.appendChild(n)}(),n=!0,a=!1)}))}()})();