function initInteraction() {
    $(".head").mousemove(pet);
    $(".head").mouseout(donePetting);

    $(".treat").draggable();
    $(".head").droppable({
        drop: function() {
            giveTreat();
        }
    });
}

function levelUp() {
    heartEffect();
    saveData.dog.affection.level++;
    saveData.dog.affection.exp = 0;
}

function pet() {
    switchEyes(".eyes-happy");
    saveData.dog.affection.exp++;

    if (saveData.dog.affection.exp > 300) {
        levelUp();
    }
}

function donePetting() {
    cellar.save("dogeared", saveData);

    setTimeout(function() {
        switchEyes(".eyes-normal");
    }, 650);
}

function giveTreat() {
    levelUp();
    $(".treat").css({
        opacity: 0
    });
}
