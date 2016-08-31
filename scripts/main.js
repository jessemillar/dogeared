var canvas = {
    width: 400,
    height: 400
};

var dog = {
    head: {
        width: 150,
        height: 205
    },
    body: {
        width: 162,
        height: 176
    },
    tail: {
        length: 100
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

dog.head.x = canvas.width / 2 - dog.head.width / 2;
dog.head.y = 0;

dog.body.x = canvas.width / 2 - dog.body.width / 2;
dog.body.y = dog.head.height / 4 * 3;

dog.tail.x1 = canvas.width / 2;
dog.tail.y1 = canvas.height / 2;
dog.tail.x2 = canvas.width / 2;
dog.tail.y2 = canvas.height / 2 - dog.tail.length;

dog.foot.left.x = canvas.width / 2 - dog.body.width / 2 - dog.foot.width / 2;
dog.foot.left.y = dog.body.y + dog.body.height - dog.foot.height * 1.2;

dog.foot.right.x = canvas.width / 2 + dog.body.width / 2 - dog.foot.width / 2;
dog.foot.right.y = dog.body.y + dog.body.height - dog.foot.height * 1.2;

dog.shadow.x = canvas.width / 2 - dog.shadow.width / 2;
dog.shadow.y = dog.body.y + dog.body.height - dog.shadow.height / 1.5;

var snap = Snap("#dog");

function init() {
    console.log("Stuff");

    drawDog();
    // animateDog();
}

function drawDog() {
    dog.shadow.svg = snap.image("images/shadow.svg", dog.shadow.x, dog.shadow.y, dog.shadow.width, dog.shadow.height);

    dog.tail.svg = snap.line(dog.tail.x1, dog.tail.y1, dog.tail.x2, dog.tail.y2);
    dog.tail.svg.attr({
        stroke: "#000",
        strokeWidth: 25
    });

    dog.body.svg = snap.image("images/body.svg", dog.body.x, dog.body.y, dog.body.width, dog.body.height);

    dog.foot.left.svg = snap.image("images/foot.svg", dog.foot.left.x, dog.foot.left.y, dog.foot.width, dog.foot.height);
    dog.foot.right.svg = snap.image("images/foot.svg", dog.foot.right.x, dog.foot.right.y, dog.foot.width, dog.foot.height);

    dog.head.svg = snap.image("images/head.svg", dog.head.x, dog.head.y, dog.head.width, dog.head.height);
}

function animateDog() {
    dog.head.svg.animate({
        width: "200px",
        height: "200px",
    }, 1000);
}
