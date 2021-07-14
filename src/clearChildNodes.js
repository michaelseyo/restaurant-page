const clearChildNodes = function() {
    console.log('start clearing..');
    const content = document.querySelector(".content");
    
    if (!content) {
        return;
    }

    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
        console.log('cleared: ', child);
    }
    console.log('clear done');
};

export default clearChildNodes