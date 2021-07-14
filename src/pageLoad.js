import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const pageLoad = function() {
    const navBar = document.createElement("nav");
    const defaultTab = createTab(navBar, home);
    createTab(navBar, menu);
    createTab(navBar, contact);

    navBar.classList.add("center");
    navBar.classList.add("nav-style")

    document.body.prepend(navBar);

    defaultTab.click();
};

const createTab = function(navBar, fn) {
    const tab = document.createElement("div");
    // loads up the tab content
    tab.addEventListener("click", fn); 
    const text = document.createElement("span");
    switch (fn) {
        case home:
            text.textContent = "Home";
            break;
        case menu:
            text.textContent = "Menu";
            break;
        case contact:
            text.textContent = "Contact";
    }
    tab.appendChild(text);
    tab.classList.add("tab-style");
    navBar.appendChild(tab);

    return tab;
}

export default pageLoad

// lets make a sticky header; black-n-white theme homepage, with the background slight gaussian blur

// objective: set-up the menu and contacts bare-bones
