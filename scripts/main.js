var cellar = new Cellar();
var snap = Snap("#dog");

var saveData = cellar.get("dogeared");

var save = {
    version: 1.0,
    dog: {
        name: "Awesome Heeler",
        affection: 0,
        accessories: []
    }
};

var canvas = {
    width: 400,
    height: 400
};

var dog = {
    // Make the main coordinate at the bottom-middle of the body
    x: 200,
    y: 350,
    head: {
        width: 150,
        height: 205,
        anchor: {
            x: 150 / 2,
            y: 190
        }
    },
    body: {
        width: 162,
        height: 161,
        anchor: {
            x: 162 / 2,
            y: 161
        }
    },
    legs: {
        width: 122,
        height: 98,
        anchor: {
            x: 122 / 2,
            y: 98
        }
    },
    tail: {
        duration: 250,
        offset: 12.5,
        width: 111,
        height: 122,
        anchor: {
            x: 111 - 12.5,
            y: 122 - 12.5
        }
    },
    foot: {
        left: {
            x: 0,
            y: 0,
            width: 30,
            height: 50,
            anchor: {
                x: 30 / 2,
                y: 45
            }
        },
        right: {
            x: 0,
            y: 0,
            width: 30,
            height: 50,
            anchor: {
                x: 30 / 2,
                y: 45
            }
        }
    },
    shadow: {
        width: 248,
        height: 75,
        anchor: {
            x: 248 / 2,
            y: 75 / 2 + 5
        }
    },
    accessories: {
        glasses: {
            width: 128,
            height: 42,
            anchor: {
                x: 128 / 2,
                y: 42 / 2
            }
        }
    },
    animation: {
        interval: 1000,
        head: {
            chance: 0.25,
            bounds: {
                left: -35,
                right: 35
            }
        },
        foot: {
            chance: 0.9,
            bounds: {
                left: -15,
                right: 15
            }
        },
        tail: {
            chance: 0.3,
            bounds: {
                left: 250,
                right: 750,
            }
        }
    }
};

dog.head.x = dog.x;
dog.head.y = dog.y - dog.body.height * 0.75;

dog.accessories.glasses.x = dog.head.x;
dog.accessories.glasses.y = dog.head.y - dog.head.height * 0.25;

dog.body.x = dog.x;
dog.body.y = dog.y;

dog.legs.x = dog.x;
dog.legs.y = dog.y + 20;

dog.tail.x = dog.x;
dog.tail.y = dog.y - dog.tail.offset;

dog.foot.left.x = dog.x - dog.body.width / 2 + 5;
dog.foot.left.y = dog.y;

dog.foot.right.x = dog.x + dog.body.width / 2 - 5;
dog.foot.right.y = dog.y;

dog.shadow.x = dog.x;
dog.shadow.y = dog.y;

function init() {
    if (!saveData) { // Create the save file if there isn't one already
        cellar.save("dogeared", save);
    }

    // TODO: Check that save data is the current version and migrate to the current version if not

    showName();

    drawDog();
    wagTail(); // Always wag tail, just change the speed to a random value

    var animateTimer = setInterval(function() {
        animateDog();
    }, dog.animation.interval);

    // debugPoint(dog.tail.x - dog.tail.anchor.x, dog.tail.y - dog.tail.anchor.y);
}

function showName() {
    document.getElementById("name").value = saveData.dog.name;
}

function setName() {
    saveData.dog.name = document.getElementById("name").value;
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

function loadImage(image, entity) {
    return snap.image("images/" + image + ".svg", eval(entity + ".x") - eval(entity + ".anchor.x"), eval(entity + ".y") - eval(entity + ".anchor.y"), eval(entity + ".width"), eval(entity + ".height"));
}

function drawDog() {
    dog.shadow.snap = loadImage("shadow", "dog.shadow");

    dog.tail.snap = loadImage("tail", "dog.tail");

    dog.body.snap = loadImage("body", "dog.body");

    dog.foot.left.snap = loadImage("foot", "dog.foot.left");
    dog.foot.right.snap = loadImage("foot", "dog.foot.right");

    dog.legs.snap = loadImage("legs", "dog.legs");

    dog.head.snap = loadImage("head", "dog.head");

    dog.accessories.glasses.snap = loadImage("glasses", "dog.accessories.glasses");

    dog.head.group = snap.group(dog.head.snap, dog.accessories.glasses.snap);
}

function animateDog() {
    if (Math.random() <= dog.animation.head.chance) {
        var angle = randomRange(dog.animation.head.bounds.left, dog.animation.head.bounds.right, true);

        tiltHead(angle, 350);
    }

    if (Math.random() <= dog.animation.tail.chance) {
        dog.tail.duration = randomRange(dog.animation.tail.bounds.left, dog.animation.tail.bounds.right);
    }

    if (Math.random() <= dog.animation.tail.chance) {
        var angle = randomRange(dog.animation.foot.bounds.left, dog.animation.foot.bounds.right, true);

        if (coinFlip()) {
            moveFoot("left", angle);
        } else {
            moveFoot("right", angle);
        }
    }
}

function tiltHead(angle, duration, timeout) {
    if (!timeout) {
        timeout = 0;
    }

    if (!duration) {
        duration = 350;
    }

    setTimeout(function() {
        dog.head.group.animate({
            transform: "r" + angle + "," + dog.head.x + ',' + dog.head.y
        }, duration, mina.easeinout);
    }, timeout);
}

function moveFoot(foot, angle, duration, timeout) {
    if (!timeout) {
        timeout = 0;
    }

    setTimeout(function() {
        eval("dog.foot." + foot).snap.animate({
            transform: "r" + angle + "," + eval("dog.foot." + foot + ".x") + ',' + eval("dog.foot." + foot + ".y")
        }, 1000, mina.easeinout);
    }, timeout);
}

function wagTail(duration) {
    if (!duration) {
        duration = 500;
    }

    dog.tail.duration = duration;

    wagTailClockwise();
}

function wagTailClockwise() {
    dog.tail.snap.animate({
        transform: "r90," + dog.x + "," + (dog.y - dog.tail.offset)
    }, dog.tail.duration, mina.easeinout, wagTailCounterClockwise);
}

function wagTailCounterClockwise() {
    dog.tail.snap.animate({
        transform: "r0," + dog.x + "," + (dog.y - dog.tail.offset)
    }, dog.tail.duration, mina.easeinout, wagTailClockwise);
}
