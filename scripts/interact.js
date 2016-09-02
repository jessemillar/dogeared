function initInteraction() {
    dog.head.snap.mousemove(pet);
    dog.head.snap.mouseout(donePetting);
}

function pet() {
    switchEyes(dog.eyes.emotions.happy);
    saveData.dog.affection.exp++;

    if (saveData.dog.affection.exp > 300) {
        heartEffect();
        saveData.dog.affection.level++;
        saveData.dog.affection.exp = 0;
    }
}

function donePetting() {
    cellar.save("dogeared", saveData);

    setTimeout(function() {
        switchEyes(dog.eyes.emotions.normal);
    }, 650);
}
