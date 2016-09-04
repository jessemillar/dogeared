function initInteraction() {
    $(".face").mousemove(pet);
    $(".face").mouseout(donePetting);
}

function pet() {
    console.log("Test");
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
