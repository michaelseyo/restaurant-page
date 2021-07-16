import { clearChildNodes, isSameTab } from './functions.js';

const contact = function() {
    if (!isSameTab("contact")) {
        clearChildNodes();
        const content = document.querySelector(".content"); 
        content.id = "contact";
        const header = document.createElement('header');
        header.textContent = "Find us";

        const mainContactContainer = document.createElement('div');
        mainContactContainer.classList.add("center");
        mainContactContainer.id = "main-contact-container";

        const contactContainer = document.createElement('div');
        contactContainer.classList.add("contact-container");
        
        const self = document.createElement("form");
        createForm(self, contactContainer);

        mainContactContainer.appendChild(contactContainer);
        content.appendChild(header);
        content.appendChild(mainContactContainer);
    }
};

const createForm = function(self, container) {
    createFormLabel(self, "name", "Name:");
    createFormLabel(self, "contactNumber", "Contact number:");
    createFormLabel(self, "email", "Email:");
    createTextArea(self);
    createSubmitBtn(self);
    container.appendChild(self);
};

const createFormLabel = function(self, id, text) {
    const label = document.createElement("label");
    label.for = id;
    label.textContent = text;
    
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;

    self.appendChild(label);
    self.appendChild(input);
};

const createTextArea = function(self) {
    const label = document.createElement("label");
    label.for = "message";
    label.textContent = "Message:";
    self.appendChild(label);

    const msg = document.createElement("textarea");
    msg.id = "message";
    msg.name = "message";
    msg.placeholder = "Write your message...";
    self.appendChild(msg);
};

const createSubmitBtn = function(self) {
    const btn = document.createElement("input");
    btn.type = "submit";
    btn.value = "Submit";
    // could add a 'message' once submit (but doesn't actually work)
    btn.addEventListener("click", function(e) {
        e.preventDefault();
    }); 
    self.appendChild(btn);
};

export default contact