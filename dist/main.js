(()=>{"use strict";const e=function(){console.log("start clearing..");const e=document.querySelector(".content");if(!e)return;let n=e.lastElementChild;for(;n;)e.removeChild(n),n=e.lastElementChild,console.log("cleared: ",n);console.log("clear done")},n=function(){e();const n=document.querySelector(".content"),t=document.createElement("header"),c=document.createElement("div"),o=new Image,d=document.createElement("p");t.textContent="Wing Tai Hung",d.textContent="Here we have the nice noodle man. Very nice fried rice, nice dumpling, nice everything. \n                        All the Chinese food in the world, most delicious buddy. Come on and give it a try, fragrant\n                        fried rice, the Yangzhou, the sweet and sour pork rib, the cereal prawn, the nice tofu :o, \n                        the nice peking duck, if you don't try don't regret it buddy :( ",o.src="./images/cover.jpeg",o.alt="noodle chef",o.classList.add("cover-img"),c.classList.add("center"),c.append(o),n.append(t),n.append(c),n.append(d)},t=function(e,n,t){const c=document.createElement("div");c.classList.add("item-container");const o=document.createElement("div");o.classList.add("food-container");const d=document.createElement("p");d.textContent=n;const i=new Image;i.src=t,i.classList.add("foodMenu-img"),o.append(i),c.append(o),c.append(d),e.appendChild(c)},c=function(){e();const n=document.querySelector(".content"),c=document.createElement("header");c.textContent="Our food";const o=document.createElement("grid");o.classList.add("foodGrid"),t(o,"Shrimp Fried Rice","./images/menu/shrimp-fried-rice.jpeg"),t(o,"Fried Noodles","./images/menu/fried-noodles.jpeg"),t(o,"Pork Ribs","./images/menu/pork-ribs.jpeg"),t(o,"Fried Pork Chop","./images/menu/porkchop.jpeg"),t(o,"Pork Wontons with Spicy Sauce","./images/menu/pork-wontons.jpeg"),t(o,"Chicken Dumplings","./images/menu/chicken-dumplings.jpeg"),t(o,"Bok Choy","./images/menu/bokchoy.jpeg"),t(o,"Stir-fry Garlic Broccoli","./images/menu/broccoli.jpeg"),n.appendChild(c),n.appendChild(o)},o=function(){e();const n=document.querySelector(".content"),t=document.createElement("header");t.textContent="Find us";const c=document.createElement("div");c.classList.add("center");const o=document.createElement("div");o.classList.add("contact-container"),c.appendChild(o),n.appendChild(t),n.appendChild(c)},d=function(e,t){const d=document.createElement("div");d.addEventListener("click",t);const i=document.createElement("span");switch(t){case n:i.textContent="Home";break;case c:i.textContent="Menu";break;case o:i.textContent="Contact"}return d.appendChild(i),d.classList.add("tab-style"),e.appendChild(d),d};!function(){const e=document.createElement("nav"),t=document.createElement("div");t.classList.add("background-container");const i=d(e,n);d(e,c),d(e,o),e.classList.add("center"),e.classList.add("nav-style"),document.body.prepend(e),document.body.prepend(t),i.click()}()})();