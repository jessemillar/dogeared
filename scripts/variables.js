var cellar = new Cellar();
var snap = Snap("#dog");

var canvas = {
    width: 400,
    height: 400
};

var saveData = cellar.get("dogeared");

var save = {
    version: 1.0,
    dog: {
        name: "Cool Heeler",
        affection: 0,
        accessories: []
    }
};

var animation = {
    interval: 1000,
    head: {
        chance: 0.2,
        duration: 350,
        bounds: {
            left: -35,
            right: 35
        }
    },
    foot: {
        chance: 0.75,
        duration: 500,
        bounds: {
            left: -15,
            right: 15
        }
    },
    tail: {
        bounds: {
            left: -55,
            right: 55,
        },
        wag: {
            chance: 0.2,
            duration: 500,
            bounds: {
                left: 250,
                right: 500,
            },
        }
    }
};

var dog = {
    // Make the main coordinate at the bottom-middle of the body
    x: 200,
    y: 350,
    head: {
        angle: 0,
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
        offset: 12.5,
        width: 25,
        height: 155,
        anchor: {
            x: 25 / 2,
            y: 155 - 12.5
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
