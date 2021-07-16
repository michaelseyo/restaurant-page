import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const pageLoad = function() {
    const navBar = document.createElement("nav");
    const backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("background-container");

    const defaultTab = createTab(navBar, home);
    createTab(navBar, menu);
    createTab(navBar, contact);

    navBar.classList.add("center");
    navBar.classList.add("nav-style")

    document.body.prepend(navBar);
    document.body.prepend(backgroundContainer);

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

// make underline on the tabs upon hover
// how to make food menu images all the same size and also the position of the text?
// work on creating min-height/min-width for a more responsive design

// objective: put the google maps location on the contact tab; need the api?