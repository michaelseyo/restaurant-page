import clearChildNodes from './clearChildNodes.js';

const contact = function() {
    clearChildNodes();
    const content = document.querySelector('.content');
    const header = document.createElement('header');
    header.textContent = "Find us";

    const mainContactContainer = document.createElement('div');
    mainContactContainer.classList.add("center");

    const contactContainer = document.createElement('div');
    contactContainer.classList.add("contact-container");

    mainContactContainer.appendChild(contactContainer);
    content.appendChild(header);
    content.appendChild(mainContactContainer);
};

export default contact