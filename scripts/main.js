function init() {
    saveData = cellar.get("dogeared");

    if (!saveData) { // Create the save file if there isn't one already
        cellar.save("dogeared", save);
        init(); // Reload with the empty save data
    } else {
        // TODO: Check that save data is the current version and migrate to the current version if not

        showName();

        initDraw(); // Draw the various parts
        initTilt(); // Start the dog with his head and feet (randomly) rotated slightly
        initAnimation(); // Start animating via the timer/chance calculations
        initInteraction(); // Set up handlers for various interactions

        // debugPoint(dog.tail.x - dog.tail.anchor.x, dog.tail.y - dog.tail.anchor.y);
    }
}
