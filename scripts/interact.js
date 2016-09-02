function initInteraction() {
    dog.head.snap.mousemove(pet);
    dog.head.snap.mouseout(donePetting);
}

function pet() {
    switchEyes("happy");
    saveData.dog.affection++;
    cellar.save("dogeared", saveData);
}

function donePetting() {
    switchEyes("normal");
}
