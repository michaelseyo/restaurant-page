import clearChildNodes from './clearChildNodes.js';

const home = function() {
    clearChildNodes();
    const header = document.createElement('header');
    const content = document.querySelector(".content");
    const imgContainer = document.createElement("div");
    const img = new Image();
    const para = document.createElement("p");

    header.textContent = "Welcome to restaurante!";
    para.textContent = `Here we have the nice noodle man. Very nice fried rice, nice dumpling, nice everything. 
                        All the Chinese food in the world, most delicious buddy. Come on and give it a try, fragrant
                        fried rice, the Yangzhou, the sweet and sour pork rib, the cereal prawn, the nice tofu :o, 
                        the nice peking duck, if you don't try don't regret it buddy :( `;
    img.src = "./images/cover.jpeg";
    img.alt = "noodle chef"

    img.classList.add("image-style");
    imgContainer.classList.add("center");
    imgContainer.append(img);
    content.append(header);
    content.append(imgContainer);
    content.append(para);
};

export default home