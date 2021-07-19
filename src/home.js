import { clearChildNodes, isSameTab } from './functions.js';

const home = function() {
    if (!isSameTab("home")) {
        clearChildNodes();
        const content = document.querySelector(".content"); 
        content.classList.add("center-stack");
        content.id = "home";
        const header = document.createElement('header');
        header.textContent = "Wing Tai Hung";

        const gridForImgs = document.createElement('grid');
        gridForImgs.classList.add("home-grid");
        createImg(gridForImgs, "./images/cover.jpeg", "noodle chef");
        createImg(gridForImgs, "./images/cover2.jpeg", "making dumplings");
        createImg(gridForImgs, "./images/cover3.jpeg", "dumplings");
        content.append(header);
        content.append(gridForImgs);
    }
};

const createImg = function(grid, src, alt) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("center-stack");
    const img = new Image();
    img.classList.add("home-img");
    img.src = src;
    img.alt = alt;

    imgContainer.append(img);
    grid.append(imgContainer);
};

export default home
