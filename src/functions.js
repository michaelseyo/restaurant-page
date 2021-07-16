const clearChildNodes = function() {
    const currentContent = document.querySelector(".content");
    let child = currentContent.lastElementChild;
    
    if (!child) {
        return 
    } 
        
    while (child) {
        currentContent.removeChild(child);
        child = currentContent.lastElementChild;
    }
};

const isSameTab = function(tab) {
    const currentContent = document.querySelector(".content");
    return (tab === currentContent.id);
};

export { clearChildNodes, isSameTab };
