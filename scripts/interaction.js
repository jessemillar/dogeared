function initInteraction() {
    dog.head.snap.mousemove(pet);
}

function pet() {
    saveData.dog.affection++;
    cellar.save("dogeared", saveData);
}
