function initInteraction() {
    $(".head").mousemove(pet);
    $(".head").mouseout(donePetting);
}

function pet() {
    switchEyes(".eyes-happy");
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
        switchEyes(".eyes-normal");
    }, 650);
}
