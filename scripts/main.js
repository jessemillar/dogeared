var snap = Snap("#dog");

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
        height: 205
    },
    body: {
        width: 162,
        height: 161
    },
    legs: {
        width: 122,
        height: 98
    },
    tail: {
        width: 111,
        height: 122
    },
    foot: {
        width: 30,
        height: 50,
        left: {
            x: 0,
            y: 0
        },
        right: {
            x: 0,
            y: 0
        }
    },
    shadow: {
        width: 248,
        height: 75
    }
};

// These values are only used for initial setup, not animation
dog.head.x = dog.x - dog.head.width / 2;
dog.head.y = dog.y - dog.body.height * 0.75 - dog.head.height;

dog.body.x = dog.x - dog.body.width / 2;
dog.body.y = dog.y - dog.body.height;

dog.legs.x = dog.x - dog.legs.width / 2;
dog.legs.y = dog.y - dog.legs.height + 20;

dog.tail.x = dog.x - dog.tail.width;
dog.tail.y = dog.y - dog.tail.height;

dog.foot.left.x = dog.x - dog.body.width / 2 - dog.foot.width / 4;
dog.foot.left.y = dog.y - dog.foot.height * 0.9;

dog.foot.right.x = dog.x + dog.body.width / 2 - dog.foot.width / 4 * 3;
dog.foot.right.y = dog.y - dog.foot.height * 0.9;

dog.shadow.x = dog.x - dog.shadow.width / 2;
dog.shadow.y = dog.y - dog.shadow.height * 0.6;

function init() {
    drawDog();
    animateDog();
    // debugPoint(dog.x, dog.y);
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

function drawDog() {
    dog.shadow.snap = snap.image("images/shadow.svg", dog.shadow.x, dog.shadow.y, dog.shadow.width, dog.shadow.height);

    dog.tail.snap = snap.image("images/tail.svg", dog.tail.x, dog.tail.y, dog.tail.width, dog.tail.height);

    dog.body.snap = snap.image("images/body.svg", dog.body.x, dog.body.y, dog.body.width, dog.body.height);

    dog.foot.left.snap = snap.image("images/foot.svg", dog.foot.left.x, dog.foot.left.y, dog.foot.width, dog.foot.height);
    dog.foot.right.snap = snap.image("images/foot.svg", dog.foot.right.x, dog.foot.right.y, dog.foot.width, dog.foot.height);

    dog.legs.snap = snap.image("images/legs.svg", dog.legs.x, dog.legs.y, dog.legs.width, dog.legs.height);

    dog.head.snap = snap.image("images/head.svg", dog.head.x, dog.head.y, dog.head.width, dog.head.height);
}

function animateDog() {
    tiltHead(1000);
    moveLeftFoot(2000);
    moveRightFoot(2500);
    wagTail();
}

function tiltHead(timeout) {
    if (!timeout) {
        timeout = 0;
    }

    setTimeout(function() {
        var bbox = dog.head.snap.getBBox();

        dog.head.snap.animate({
            transform: "r30," + bbox.cx + ',' + (bbox.cy + 25)
        }, 250, mina.easeinout);
    }, timeout);
}

function wagTail() {
    wagTailClockwise();
}

function wagTailClockwise() {
    var bbox = dog.tail.snap.getBBox();

    dog.tail.snap.animate({
        transform: "r90," + dog.x + "," + dog.y
    }, 250, mina.easeinout, wagTailCounterClockwise);
}

function wagTailCounterClockwise() {
    var bbox = dog.tail.snap.getBBox();

    dog.tail.snap.animate({
        transform: "r0," + dog.x + "," + dog.y
    }, 250, mina.easeinout, wagTailClockwise);
}

function moveLeftFoot(timeout) {
    if (!timeout) {
        timeout = 0;
    }

    setTimeout(function() {
        var bbox = dog.foot.left.snap.getBBox();

        dog.foot.left.snap.animate({
            transform: "r-25," + bbox.cx + ',' + (bbox.cy + dog.foot.height / 2)
        }, 500, mina.easeinout);
    }, timeout);
}

function moveRightFoot(timeout) {
    if (!timeout) {
        timeout = 0;
    }

    setTimeout(function() {
        var bbox = dog.foot.right.snap.getBBox();

        dog.foot.right.snap.animate({
            transform: "r25," + bbox.cx + ',' + (bbox.cy + dog.foot.height / 2)
        }, 500, mina.easeinout);
    }, timeout);
}
