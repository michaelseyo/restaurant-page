import { clearChildNodes, isSameTab } from './functions.js';

const contact = function() {
    if (!isSameTab("contact")) {
        clearChildNodes();
        const content = document.querySelector(".content"); 
        content.id = "contact";
        const header = document.createElement('header');
        header.textContent = "Find us";

        const mainContactContainer = document.createElement('div');
        mainContactContainer.classList.add("center-stack");
        mainContactContainer.id = "main-contact-container";

        const locationContainer = document.createElement('div');
        locationContainer.classList.add("map");
        locationContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.96647945566843!2d103.85971742878698!3d1.3036199467519005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b6d09a802f%3A0x80f027396fc33702!2s779%20North%20Bridge%20Rd%2C%20Singapore%20198747!5e0!3m2!1sen!2ssg!4v1626421607226!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

        const contactContainer = document.createElement('div');
        contactContainer.classList.add("contact-container");

        const contactDetailsContainer = document.createElement('div');
        contactDetailsContainer.classList.add("contact-details-container");
        createTextBox(contactDetailsContainer, "Phone: +52 6923 1239");
        createTextBox(contactDetailsContainer, "Everyday 10am-10pm");
        createTextBox(contactDetailsContainer, `Email: services@wingtaihung.com`);

        const self = document.createElement("form");
        createForm(self, contactContainer);

        mainContactContainer.append(locationContainer);
        mainContactContainer.append(contactDetailsContainer);
        mainContactContainer.appendChild(contactContainer);
        content.appendChild(header);
        content.appendChild(mainContactContainer);
    }
};

const createTextBox = function(container, message) {
    const text = document.createElement("p");
    text.textContent = message;
    text.classList.add("contact-details-text");
    container.appendChild(text);
}

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