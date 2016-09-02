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
    setTimeout(function() {
        switchEyes("normal");
    }, 650);
}

function heartEffect(duration) {
    effects.heart.snap.animate({
        transform: "t125,-125"
    }, duration, mina.easeinout);
}
