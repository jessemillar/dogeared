function initDraw() {
    switchEyes(".eyes-normal");

    $(".treat").draggable();
}

function switchEyes(eyes) {
    $(".eyes-normal").css({
        opacity: 0
    });
    $(".eyes-happy").css({
        opacity: 0
    });
    $(".eyes-sleepy").css({
        opacity: 0
    });

    $(eyes).css({
        opacity: 1
    });
}
