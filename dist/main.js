(()=>{"use strict";const e=function(){const e=document.querySelector(".content");let t=e.lastElementChild;if(t)for(;t;)e.removeChild(t),t=e.lastElementChild},t=function(e){return e===document.querySelector(".content").id},n=function(){if(!t("home")){e();const t=document.querySelector(".content");t.id="home";const n=document.createElement("header"),c=document.createElement("div"),o=new Image,d=document.createElement("p");n.textContent="Wing Tai Hung",d.textContent="Here we have the nice noodle man. Very nice fried rice, nice dumpling, nice everything. \n                            All the Chinese food in the world, most delicious buddy. Come on and give it a try, fragrant\n                            fried rice, the Yangzhou, the sweet and sour pork rib, the cereal prawn, the nice tofu :o, \n                            the nice peking duck, if you don't try don't regret it buddy :( ",o.src="./images/cover.jpeg",o.alt="noodle chef",o.classList.add("cover-img"),c.classList.add("center"),c.append(o),t.append(n),t.append(c),t.append(d)}},c=function(e,t,n){const c=document.createElement("div");c.classList.add("item-container");const o=document.createElement("div");o.classList.add("food-container");const d=document.createElement("p");d.textContent=t;const i=new Image;i.src=n,i.classList.add("food-menu-img"),o.append(i),c.append(o),c.append(d),e.appendChild(c)},o=function(){if(!t("menu")){e();const t=document.querySelector(".content");t.id="menu";const n=document.createElement("header");n.textContent="Our food";const o=document.createElement("grid");o.classList.add("food-grid"),c(o,"Shrimp Fried Rice","./images/menu/shrimp-fried-rice.jpeg"),c(o,"Fried Noodles","./images/menu/fried-noodles.jpeg"),c(o,"Pork Ribs","./images/menu/pork-ribs.jpeg"),c(o,"Fried Pork Chop","./images/menu/porkchop.jpeg"),c(o,"Pork Wontons with Spicy Sauce","./images/menu/pork-wontons.jpeg"),c(o,"Chicken Dumplings","./images/menu/chicken-dumplings.jpeg"),c(o,"Bok Choy","./images/menu/bokchoy.jpeg"),c(o,"Stir-fry Garlic Broccoli","./images/menu/broccoli.jpeg"),t.appendChild(n),t.appendChild(o)}},d=function(e,t,n){const c=document.createElement("label");c.for=t,c.textContent=n;const o=document.createElement("input");o.type="text",o.id=t,o.name=t,e.appendChild(c),e.appendChild(o)},i=function(e){const t=document.createElement("label");t.for="message",t.textContent="Message:",e.appendChild(t);const n=document.createElement("textarea");n.id="message",n.name="message",n.placeholder="Write your message...",e.appendChild(n)},a=function(e){const t=document.createElement("input");t.type="submit",t.value="Submit",t.addEventListener("click",(function(e){e.preventDefault()})),e.appendChild(t)},r=function(){if(!t("contact")){e();const t=document.querySelector(".content");t.id="contact";const n=document.createElement("header");n.textContent="Find us";const c=document.createElement("div");c.classList.add("center"),c.id="main-contact-container";const o=document.createElement("div");o.classList.add("contact-container");(function(e,t){d(e,"name","Name:"),d(e,"contactNumber","Contact number:"),d(e,"email","Email:"),i(e),a(e),t.appendChild(e)})(document.createElement("form"),o),c.appendChild(o),t.appendChild(n),t.appendChild(c)}},s=function(e,t){const c=document.createElement("div");c.addEventListener("click",t);const d=document.createElement("span");switch(t){case n:d.textContent="Home";break;case o:d.textContent="Menu";break;case r:d.textContent="Contact"}return c.appendChild(d),c.classList.add("tab-style"),e.appendChild(c),c};!function(){const e=document.createElement("nav"),t=document.createElement("div");t.classList.add("background-container");const c=s(e,n);s(e,o),s(e,r),e.classList.add("center"),e.classList.add("nav-style"),document.body.prepend(e),document.body.prepend(t),c.click()}()})();