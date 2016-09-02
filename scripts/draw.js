function initDraw() {
    dog.shadow.snap = loadImage("shadow", "dog.shadow");

    dog.tail.snap = loadImage("tail", "dog.tail");

    dog.body.snap = loadImage("body", "dog.body");

    dog.foot.left.snap = loadImage("foot", "dog.foot.left");
    dog.foot.right.snap = loadImage("foot", "dog.foot.right");

    dog.legs.snap = loadImage("legs", "dog.legs");

    dog.head.snap = loadImage("head", "dog.head");

    dog.eyes.snap = loadImage("eyes", "dog.eyes");

    accessories.glasses.snap = loadImage("glasses", "accessories.glasses");

    dog.head.group = snap.group(dog.head.snap, accessories.glasses.snap, dog.eyes.snap);
}

function loadImage(image, entity) {
    return snap.image("images/" + image + ".svg", eval(entity + ".x") - eval(entity + ".anchor.x"), eval(entity + ".y") - eval(entity + ".anchor.y"), eval(entity + ".width"), eval(entity + ".height"));
}

function debugPoint(x, y, color) {
    var debugCircle = snap.circle(x, y, 1, 1);

    if (color) {
        debugCircle.attr({
            fill: color
        });
    } else {
        debugCircle.attr({
            fill: "#ff0000"
        });
    }
}
