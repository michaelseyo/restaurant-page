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
        
        form.createForm(contactContainer);

        mainContactContainer.appendChild(contactContainer);
        content.appendChild(header);
        content.appendChild(mainContactContainer);
    }
};

const form = (function() {
    const self = document.createElement("form");

    const createForm = function(container) {
        createFormLabel("name", "Name:");
        createFormLabel("contactNumber", "Contact number:");
        createFormLabel("email", "Email:");
        createTextArea();
        createSubmitBtn();
        container.appendChild(self);
    };
    
    const createFormLabel = function(id, text) {
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

    const createTextArea = function() {
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

    const createSubmitBtn = function() {
        const btn = document.createElement("input");
        btn.type = "submit";
        btn.value = "Submit";
        // could add a 'message' once submit (but doesn't actually work)
        btn.addEventListener("click", function(e) {
            e.preventDefault();
        }); 
        self.appendChild(btn);
    };

    return {
        createForm,
    };
})();

export default contact