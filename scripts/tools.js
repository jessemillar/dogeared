function showName() {
    $(".name").val(saveData.dog.name);
}

function setName() {
    saveData.dog.name = $(".name").val();
    cellar.save("dogeared", saveData);
}

function coinFlip() {
    if (Math.random() < 0.5) {
        return false;
    } else {
        return true;
    }
}

function randomRange(left, right, negative) {
    if (negative) {
        return Math.floor(Math.random() * (right - 1 + right)) + left;
    }

    return Math.floor(Math.random() * right) + left;
}

function applyCSS(div, attributes) {
    $(div).css({
        position: "absolute",
        top: attributes.x,
        left: attributes.y,
        width: attributes.width + "px",
        height: attributes.height + "px",
        marginLeft: "-" + attributes.anchor.x + "px",
        marginTop: "-" + attributes.anchor.y + "px"
    });
}
