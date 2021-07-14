const home = function() {
    const header = document.querySelector("header");
    const content = document.querySelector(".content");
    const imgContainer = document.createElement("div");
    const img = new Image();
    const para = document.createElement("p");

    header.textContent = "Welcome to restaurante!";
    para.textContent = `Italian food culture has a long tradition, built up over many years. 
                        All dishes and drinks, from appetizers to desserts, apéritifs
                        to digestifs, have their own sophistication. Selecting and combining
                        these elements allows us to form a meal that is more than the sum of its parts,
                        as foods complement one another to double the flavors.`;
    img.src = "./images/eating.jpeg";

    img.classList.add("image-style");
    imgContainer.classList.add("center");
    imgContainer.append(img);
    content.append(imgContainer);
    content.append(para);
}

export default home