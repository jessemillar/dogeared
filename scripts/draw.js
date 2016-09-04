function initDraw() {
    switchEyes(".eyes-normal");
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

function applyCSS(div, attributes, zIndex) {
    $(div).css({
        position: "absolute",
        top: attributes.y,
        left: attributes.x,
        width: attributes.width + "px",
        height: attributes.height + "px",
        marginLeft: "-" + attributes.anchor.x + "px",
        marginTop: "-" + attributes.anchor.y + "px",
        zIndex: zIndex
    });
}
