function initDraw() {
    applyCSS(".heart", effects.heart, 7);
    applyCSS(".glasses", accessories.glasses, 6);
    applyCSS(".eyes-normal", dog.eyes, 5);
    applyCSS(".eyes-happy", dog.eyes, 5);
    applyCSS(".eyes-sleepy", dog.eyes, 5);
    applyCSS(".head", dog.head, 4);
    applyCSS(".face", dog.face, 4);
    applyCSS(".legs", dog.legs, 4);
    applyCSS(".foot-left", dog.foot.left, 3);
    applyCSS(".foot-right", dog.foot.right, 3);
    applyCSS(".torso", dog.torso, 2);
    applyCSS(".tail", dog.tail, 1);
    applyCSS(".shadow", dog.shadow, 0);

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
