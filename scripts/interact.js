function initInteraction() {
    dog.head.snap.mousemove(pet);
    dog.head.snap.mouseout(donePetting);
}

function pet() {
    switchEyes("happy");
    saveData.dog.affection.exp++;
    cellar.save("dogeared", saveData);

    if (saveData.dog.affection.exp > 500) {
        heartEffect();
        saveData.dog.affection.level++;
        saveData.dog.affection.exp = 0;
    }
}

function donePetting() {
    setTimeout(function() {
        switchEyes("normal");
    }, 650);
}
