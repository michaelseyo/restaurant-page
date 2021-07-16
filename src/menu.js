import { clearChildNodes, isSameTab } from './functions.js';

const menu = function() {
    if (!isSameTab("menu")) {
        clearChildNodes();
        const content = document.querySelector(".content");
        content.id = "menu";
        const header = document.createElement('header');
        header.textContent = "Our food";
        const foodGrid = document.createElement('grid');
        foodGrid.classList.add("food-grid");

        createFoodItem(foodGrid, "Shrimp Fried Rice", './images/menu/shrimp-fried-rice.jpeg');
        createFoodItem(foodGrid, "Fried Noodles", './images/menu/fried-noodles.jpeg');
        createFoodItem(foodGrid, "Pork Ribs", './images/menu/pork-ribs.jpeg');
        createFoodItem(foodGrid, "Fried Pork Chop", './images/menu/porkchop.jpeg');
        createFoodItem(foodGrid, "Pork Wontons with Spicy Sauce", './images/menu/pork-wontons.jpeg');
        createFoodItem(foodGrid, "Chicken Dumplings", './images/menu/chicken-dumplings.jpeg');
        createFoodItem(foodGrid, "Bok Choy", './images/menu/bokchoy.jpeg');
        createFoodItem(foodGrid, "Stir-fry Garlic Broccoli", './images/menu/broccoli.jpeg');

        content.appendChild(header);
        content.appendChild(foodGrid);
    }
};

const createFoodItem = function(foodGrid, name, imgSrc) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add("item-container");
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('food-container');
    
    const text = document.createElement('p');
    text.textContent = name;
    
    const img = new Image();
    img.src = imgSrc;
    img.classList.add('food-menu-img');
    
    imgContainer.append(img);
    itemContainer.append(imgContainer);
    itemContainer.append(text);
    foodGrid.appendChild(itemContainer);
};

export default menu