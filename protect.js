// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable dragging images
document.addEventListener("dragstart", e => e.preventDefault());

// Disable text selection
document.addEventListener("selectstart", e => e.preventDefault());

// Disable common shortcuts
document.addEventListener("keydown", function(e){

    if (e.key === "F12")
        e.preventDefault();

    if (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key))
        e.preventDefault();

    if (e.ctrlKey && ["U","S","P"].includes(e.key.toUpperCase()))
        e.preventDefault();

});